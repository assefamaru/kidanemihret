Rails.application.routes.draw do
  root                  'static_pages#home'
  get  'about',     to: 'static_pages#about'
  get  'contact',   to: 'static_pages#contact'

  get  'store',     to: 'store#index'
  get  'store/:id', to: 'store#show'
end
