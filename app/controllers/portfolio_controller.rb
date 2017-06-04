class PortfolioController < ApplicationController
  def index
  end

  def contact
  end

  def blog
    @posts = Post.all
    @post = Post.find_by(slug: params[:post_id]) if params[:post_id]
    puts @post.present?
  end
end
