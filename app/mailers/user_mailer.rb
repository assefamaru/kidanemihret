class UserMailer < ApplicationMailer
  def account_activation(user)
    @user = user
    mail to: user.email, subject: "Please verify your Kidane Mihret account"
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Kidane Mihret password reset link"
  end
end
