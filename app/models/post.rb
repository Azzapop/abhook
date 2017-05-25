class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  before_validation :create_blurb, on: [:create, :update]

  validates :title, :slug, :blurb, :content, presence: true
  validates :pinned, inclusion: [true, false]

  private
  def create_blurb
    if content
      text = content.split(' ')
      b = text.drop(1).inject(text.first) { |s, w| s += " #{ w }" if (s + " #{ w }").length < 250; s } + " ..."
      self.blurb = b
    end
  end
end
