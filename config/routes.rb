Rails.application.routes.draw do
  root to: 'portfolio#index'

  get 'contact', to: 'portfolio#contact'
  get 'blog', to: 'portfolio#blog'
  get "blog/*post_id", to: "portfolio#blog", as: :post

  post 'enquiry', to: 'enquiry#create'
end
