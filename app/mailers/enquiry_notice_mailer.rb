class EnquiryNoticeMailer < ApplicationMailer
  default to: "aaron.b.hook@gmail.com"

  def send_enquiry(enquiry_id)
    @enquiry = Enquiry.find(enquiry_id)
    mail(from: @enquiry.email, subject: "New enquiry from #{ @enquiry.email }")
  end
end
