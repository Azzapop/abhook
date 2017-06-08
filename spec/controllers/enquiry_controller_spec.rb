require 'rails_helper'

RSpec.describe EnquiryController, type: :controller do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'saves the enquiry to the database' do
        expect {
          # TODO include FactoryGirl helper methods
          process :create, method: :post, params: { enquiry: attributes_for(:enquiry) }
        }.to change(Enquiry, :count).by(1)
      end
      it 'returns with status 200' do
        process :create, method: :post, params: { enquiry: attributes_for(:enquiry) }
        expect(response.status).to eq(200)
      end
      it 'returns a json object containing success => true' do
        expected_response = { success: true }
        process :create, method: :post, params: { enquiry: attributes_for(:enquiry) }
        actual_response = JSON.parse(response.body, symbolize_names: true)
        expect(actual_response[:success]).to eq(expected_response[:success])
      end
    end
    context 'with invalid attributes' do
      it 'does not save the enquiry to the database' do
        expect {
          process :create, method: :post, params: { enquiry: attributes_for(:invalid_enquiry) }
        }.to_not change(Enquiry, :count)
      end
      it 'returns with status 400' do
        process :create, method: :post, params: { enquiry: attributes_for(:invalid_enquiry) }
        expect(response.status).to eq(400)
      end
      it 'returns a json object containing success => false' do
        expected_response = { success: false }
        process :create, method: :post, params: { enquiry: attributes_for(:invalid_enquiry) }
        actual_response = JSON.parse(response.body, symbolize_names: true)
        expect(actual_response[:success]).to eq(expected_response[:success])
      end
      it 'returns a json object containing a hash of objects with a list of errors' do
        expected_response = { errors: { email: ['I need an email to respond to you.'] } }
        process :create, method: :post, params: { enquiry: attributes_for(:invalid_enquiry) }
        actual_response = JSON.parse(response.body, symbolize_names: true)
        expect(actual_response[:errors]).to eq(expected_response[:errors])
      end
    end
  end
end
