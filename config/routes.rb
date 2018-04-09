Rails.application.routes.draw do
    root 'static#home'

    get  '/about',       to: 'static#about'
    get  '/teachings',   to: 'static#teachings'
    get  '/media',       to: 'static#media'
    get  '/news',        to: 'static#news'
    get  '/contact',     to: 'static#contact'

    get  '/dev',         to: 'static#dev'
    get  '/temp',        to: 'static#temp'

    get '/sitemap.xml',  to: redirect("sitemap.xml")
end
