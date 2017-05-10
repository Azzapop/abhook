class EnquiryController < ApplicationController

  def create
    e = Enquiry.new(enquiry_params)
    if e.save
      render json: { status: :success }
    else
      errors = e.errors.inject([]) { |arr, err| arr << err[1]; arr }
      render json: { status: :error, errors: errors }
    end
  end

  private
  def enquiry_params
    params.require(:enquiry).permit(:email, :message)
  end
end
