Rails.application.routes.draw do
    root 'static#home'
    
    get  '/about',           to: 'static#about'
    get  '/contact',         to: 'static#contact'

    get  '/coming-soon',     to: 'static#coming'
    get  '/temp',            to: 'static#temp'
end
