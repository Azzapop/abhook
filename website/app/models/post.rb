class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates :title, :slug, :blurb, :content, presence: true
  validates :pinned, inclusion: [true, false]
end
