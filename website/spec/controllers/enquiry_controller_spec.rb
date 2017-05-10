require 'rails_helper'

RSpec.describe EnquiryController, type: :controller do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'saves the enquiry to the database' do
        expect{
          # TODO include FactoryGirl helper methods
          process :create, method: :post, params: { enquiry: FactoryGirl.attributes_for(:enquiry) }
        }.to change(Enquiry, :count).by(1)
      end
    end
  end
end
