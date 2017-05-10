require 'rails_helper'

RSpec.describe EnquiryController, type: :controller do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'saves the enquiry to the database' do
        expect {
          # TODO include FactoryGirl helper methods
          process :create, method: :post, params: { enquiry: FactoryGirl.attributes_for(:enquiry) }
        }.to change(Enquiry, :count).by(1)
      end
      it 'returns a json object containing status => success' do
        expected_response = { status: 'success' }
        process :create, method: :post, params: { enquiry: FactoryGirl.attributes_for(:enquiry) }
        actual_response = JSON.parse(response.body, symbolize_names: true)
        expect(actual_response[:status]).to eq(expected_response[:status])
      end
    end
    context 'with invalid attributes' do
      it 'does not save the enquiry to the database' do
        expect {
          process :create, method: :post, params: { enquiry: FactoryGirl.attributes_for(:invalid_enquiry) }
        }.to_not change(Enquiry, :count)
      end
      it 'returns a json object containing status => error' do
        expected_response = { status: 'error' }
        process :create, method: :post, params: { enquiry: FactoryGirl.attributes_for(:invalid_enquiry) }
        actual_response = JSON.parse(response.body, symbolize_names: true)
        expect(actual_response[:status]).to eq(expected_response[:status])
      end
      it 'returns a json object container a list of errors' do
        expected_response = { errors: ['I need an email to respond to you.'] }
        process :create, method: :post, params: { enquiry: FactoryGirl.attributes_for(:invalid_enquiry) }
        actual_response = JSON.parse(response.body, symbolize_names: true)
        expect(actual_response[:errors]).to eq(expected_response[:errors])
      end
    end
  end
end
