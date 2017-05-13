class EnquiryController < ApplicationController

  def create
    e = Enquiry.new(enquiry_params)
    if e.save
      render json: { status: :success }
    else
      _errors = e.errors.inject([]) { |arr, err| arr << err[1]; arr }
      render status: 400, json: { status: :error, errors: _errors }
    end
  end

  private
  def enquiry_params
    params.require(:enquiry).permit(:email, :message)
  end
end
