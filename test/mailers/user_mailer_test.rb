require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
    test "account_activation" do
        user = users(:alexander)
        user.activation_token = User.new_token
        mail = UserMailer.account_activation(user)
        assert_equal "Account activation", mail.subject
        assert_equal [user.email], mail.to
        assert_equal ["noreply@example.com"], mail.from
        assert_match user.name,               mail.body.encoded
        assert_match user.activation_token,   mail.body.encoded
        assert_match CGI.escape(user.email),  mail.body.encoded
    end

    # Preview this email at
    # http://localhost:3000/rails/mailers/user_mailer/password_reset
    def password_reset
        user = User.first
        user.reset_token = User.new_token
        UserMailer.password_reset(user)
    end
end