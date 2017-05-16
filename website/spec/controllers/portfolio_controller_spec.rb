require 'rails_helper'

RSpec.describe PortfolioController, type: :controller do
  describe 'GET #portfolio' do
    it 'renders the index view' do
      process :index, method: :get
      expect(response).to render_template(:index)
    end
  end

  describe 'GET #contact' do
    it 'renders the contact view' do
      process :contact, method: :get
      expect(response).to render_template(:contact)
    end
  end

  describe 'GET #blog' do
    pending 'check for no pinned'
    pending 'check for no posts'
    it 'renders the blog view' do
      process :blog, method: :get
      expect(response).to render_template(:blog)
    end
    it 'gets a list of all the pinned blog posts' do
      _post1, _post2 = FactoryGirl.create(:post), FactoryGirl.create(:post)
      post3 = FactoryGirl.create(:post, pinned: true)
      process :blog, method: :get
      expect(assigns[:pinned_posts]).to match_array([post3])
    end
    it 'gets a list of all the non pinned blog posts' do
      post1, post2 = FactoryGirl.create(:post), FactoryGirl.create(:post)
      process :blog, method: :get
      expect(assigns[:posts]).to match_array([post2, post1])
    end
  end
end
