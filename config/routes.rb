Rails.application.routes.draw do
    root 'static#home'

    get  '/about',           to: 'static#about'
    get  '/contact',         to: 'static#contact'

    get  '/dev',             to: 'static#dev'
    get  '/temp',            to: 'static#temp'
end
