require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
    test "account_activation" do
        user = users(:michael)
        user.activation_token = User.new_token
        mail = UserMailer.account_activation(user)
        assert_equal "[Kidanemihret EOTC]: Account activation", mail.subject
        assert_equal [user.email], mail.to
        assert_equal ["noreply@kidanemihret.org"], mail.from
        assert_match user.first_name,         mail.body.encoded
        assert_match user.activation_token,   mail.body.encoded
        assert_match CGI.escape(user.email),  mail.body.encoded
    end

    test "password_reset" do
        user = users(:michael)
        user.reset_token = User.new_token
        mail = UserMailer.password_reset(user)
        assert_equal "[Kidanemihret EOTC]: Password reset", mail.subject
        assert_equal [user.email], mail.to
        assert_equal ["noreply@kidanemihret.org"], mail.from
        assert_match user.reset_token,        mail.body.encoded
        assert_match CGI.escape(user.email),  mail.body.encoded
    end

end
