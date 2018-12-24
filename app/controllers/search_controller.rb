class SearchController < ApplicationController

    def results
        @users = User.where('first_name LIKE ?', "#{params[:q]}")
    end

    private

        def search_params
            params.require(:users).permit(:first_name, :last_name)
        end
end
