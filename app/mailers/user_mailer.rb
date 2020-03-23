class UserMailer < ApplicationMailer
  def account_activation(user)
    @user = user
    mail to: user.email, subject: "Kidanemihret EOTC: Account activation"
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Kidanemihret EOTC: Password reset"
  end
end
