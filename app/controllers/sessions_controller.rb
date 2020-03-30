class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      if user.activated?
        log_in user
        params[:session][:remember_me] == '1' ? remember(user) : forget(user)
        redirect_to user
      else
        flash[:warning] = "You need to activate your account before you can log in. Check your email for the activation link."
        redirect_to login_path
      end
    else
      flash.now[:error] = 'Invalid email/password combination.'
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to login_path
  end
end
