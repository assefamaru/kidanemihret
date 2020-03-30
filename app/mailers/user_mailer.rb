class UserMailer < ApplicationMailer
  def account_activation(user)
    @user = user
    mail to: user.email, subject: "Kidanemihret - Account Activation"
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Kidanemihret - Password Reset"
  end
end
