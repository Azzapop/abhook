require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'should have a valid factory' do
    p = FactoryGirl.build(:post)
    expect(p).to be_valid
  end
  it 'should have an invalid factory' do
    p = FactoryGirl.build(:invalid_post)
    expect(p).to be_invalid
  end
  it 'should have be valid with a title and content' do
    p = Post.create(
      FactoryGirl.attributes_for(:post)
    )
    expect(p).to be_valid
  end
  it 'should automatically generate a slug' do
    p = Post.create(
      FactoryGirl.attributes_for(:post)
    )
    expect(p.slug).not_to be_nil
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
  it 'should be invalid without content' do
    p = Post.create(content: nil)
    expect(p).to be_invalid
    expect(p).to have(1).error_on(:content)
  end
end
