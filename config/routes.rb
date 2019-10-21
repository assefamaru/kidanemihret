Rails.application.routes.draw do
  root 'static_pages#home'

  get  'about',    to: 'static_pages#about'
  get  'contact',  to: 'static_pages#contact'
  get  'bible',    to: 'static_pages#bible'
  get  'calendar', to: 'static_pages#calendar'
  get  'donate',   to: 'static_pages#donate'
  get  'faq',      to: 'static_pages#faq'
end
