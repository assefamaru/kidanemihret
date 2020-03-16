class StoreController < ApplicationController
  before_action :authenticate

  def index
    @products = ShopifyAPI::Product.all
  end

  def show
    @product = ShopifyAPI::Product.find(params[:id])
  end

  private

    def store_params
      params.require(:store).permit(:id)
    end

    def authenticate
      shop_url = "https://#{ENV['API_KEY']}:#{ENV['PASSWORD']}@#{ENV['SHOP_NAME']}.myshopify.com"
      ShopifyAPI::Base.site = shop_url
      ShopifyAPI::Base.api_version = "#{ENV['API_VERSION']}"
    end
end
