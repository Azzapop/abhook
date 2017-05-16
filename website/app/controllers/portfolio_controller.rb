class PortfolioController < ApplicationController
  def index
  end

  def contact
  end

  def blog
    posts = Post.all
    pinned = posts.group_by { |p| p.pinned }
    @pinned_posts = pinned[true]
    @posts = pinned[false]
  end
end
