class PortfolioController < ApplicationController
  def index
  end

  def contact
  end

  def blog
    @posts = Post.all
  end
end
