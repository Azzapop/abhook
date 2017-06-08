class EnquiryController < ApplicationController

  def create
    e = Enquiry.new(enquiry_params)
    if e.save
      EnquiryNoticeMailer.send_enquiry(e.id).deliver
      render json: { success: true }
    else
      errors = e.errors.inject(Hash.new { |h, k| h[k] = [] }) { |hash, err| hash[err[0]] << err[1]; hash }
      render status: 400, json: { success: false, errors: errors }
    end
  end

  private
  def enquiry_params
    params.require(:enquiry).permit(:email, :message)
  end
end
