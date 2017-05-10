class Enquiry < ApplicationRecord
  EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i

  validates :email, :message, presence: true
  # use allow_blank to prevent multiple errors if they haven't entered it
  validates_format_of :email, with: EMAIL_REGEX, allow_blank: true
end
