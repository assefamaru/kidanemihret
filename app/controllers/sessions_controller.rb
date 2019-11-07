class SessionsController < ApplicationController
  def new
  end

  def create
    if ! User.any?
      flash[:info] = "Sign up before attempting to log in."
      redirect_to signup_path
    else
      user = User.find_by(email: params[:session][:email].downcase)
      if user && user.authenticate(params[:session][:password])
        if user.activated?
          log_in user
          params[:session][:remember_me] == '1' ? remember(user) : forget(user)
          redirect_back_or user
        else
          message  = "Pending! Account not activated. "
          message += "Please check your email for the activation link."
          flash[:warning] = message
          redirect_to root_url
        end
      else
        flash.now[:error] = 'Invalid email/password combination.'
        render 'new'
      end
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to login_path
  end
end
