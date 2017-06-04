class PortfolioController < ApplicationController
  rescue_from ReactOnRails::PrerenderError do |err|
    puts "================="
    puts err.inspect
    puts "=================="
    # Rails.logger.error(err.message)
    # Rails.logger.error(err.backtrace.join("\n"))
    # redirect_to root_path, flash: { error: "Error prerendering in react_on_rails. See server logs."  }
  end

  def index
  end

  def contact
  end

  def blog
    @posts = Post.all
  rescue ReactOnRails::PrerenderError
    puts "00000000000000000"
  end
end
