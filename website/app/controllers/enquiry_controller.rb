class EnquiryController < ApplicationController

  def create
    Enquiry.create(enquiry_params)
  end

  private
  def enquiry_params
    params.require(:enquiry).permit(:email, :message)
  end
end
