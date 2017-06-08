class EnquiryNoticeMailer < ApplicationMailer
  default from: "abhook.id.au enquiry <enquiries@abhook.id.au>"
  default to: "aaron.b.hook@gmail.com"

  def send_enquiry(enquiry_id)
    @enquiry = Enquiry.find(enquiry_id)
    mail(subject: "New enquiry from #{ @enquiry.email }")
  end
end
