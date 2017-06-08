require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'should have a valid factory' do
    p = build(:post)
    expect(p).to be_valid
  end
  it 'should have an invalid factory' do
    p = build(:invalid_post)
    expect(p).to be_invalid
  end
  it 'should have be valid with a title and content' do
    p = Post.create(attributes_for(:post))
    expect(p).to be_valid
  end
  it 'should automatically generate a slug' do
    p = Post.create(attributes_for(:post))
    expect(p.slug).not_to be_nil
  end
  it 'should automatically generate a blurb' do
    p = Post.create(attributes_for(:post))
    expect(p.blurb).not_to be_nil
  end
  it 'should be invalid without a title' do
    p = Post.create(title: nil)
    expect(p).to be_invalid
    expect(p).to have(1).error_on(:title)
  end
  it 'should be invalid without a slug' do
    p = Post.create(slug: nil)
    expect(p).to be_invalid
    expect(p).to have(1).error_on(:slug)
  end
  it 'should be invalid without a blurb' do
    p = Post.create(blurb: nil)
    expect(p).to be_invalid
    expect(p).to have(1).error_on(:blurb)
  end
  it 'should be invalid without content' do
    p = Post.create(content: nil)
    expect(p).to be_invalid
    expect(p).to have(1).error_on(:content)
  end
  it 'should be invalid without pinned' do
    p = Post.create(pinned: nil)
    expect(p).to be_invalid
    expect(p).to have(1).error_on(:pinned)
  end
  it 'should default to not pinned' do
    p = Post.create
    expect(p.pinned).to eq(false)
  end
  it 'should be valid when pinned and not pinned' do
    p = Post.create(attributes_for(:post))
    p.update_attribute(:pinned, false)
    expect(p).to be_valid
    p.update_attribute(:pinned, true)
    expect(p).to be_valid
  end
end
