Rails.application.routes.draw do
  root   'static_pages#home'

  get    'about',               to: 'static_pages#about'
  get    'contact',             to: 'static_pages#contact'
  get    'calendar',            to: 'static_pages#calendar'
  get    'bible',               to: 'static_pages#bible'
  get    'donate',              to: 'static_pages#donate'
  get    'faq',                 to: 'static_pages#faq'

  get    '/signup',             to: 'users#new'
  post   '/signup',             to: 'users#create'
  get    '/login',              to: 'sessions#new'
  post   '/login',              to: 'sessions#create'
  delete '/logout',             to: 'sessions#destroy'


  resources :users
  resources :account_activations, only: [:edit]
  resources :password_resets,     only: [:new, :create, :edit, :update]
end
