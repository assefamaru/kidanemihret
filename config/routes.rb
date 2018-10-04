Rails.application.routes.draw do
  get 'sessions/new'
    root      'static#home'
    get       'about',         to: 'static#about'
    get       'contact',       to: 'static#contact'
    get       'signup',        to: 'users#new'
    post      '/signup',       to: 'users#create'
    get       '/login',        to: 'sessions#new'
    post      '/login',        to: 'sessions#create'
    delete    '/logout',       to: 'sessions#destroy'
    resources :users
    resources :account_activations, only: [:edit]
end
