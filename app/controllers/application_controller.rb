class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def sort_errors(errors)
    err = []

    first_name_errors = errors[:first_name]
    last_name_errors = errors[:last_name]
    email_errors = errors[:email]
    password_errors = errors[:password]
    password_confirmation_errors = errors[:password_confirmation]

    if first_name_errors.kind_of?(Array)
      s = ""
      first_name_errors.each do |error|
        s = s + "* First name " + error + " "
      end
      err << s
    else
      err << first_name_errors
    end

    if last_name_errors.kind_of?(Array)
      s = ""
      last_name_errors.each do |error|
        s = s + "* Last name " + error + " "
      end
      err << s
    else
      err << last_name_errors
    end

    if email_errors.kind_of?(Array)
      s = ""
      email_errors.each do |error|
        s = s + "* Email " + error + " "
      end
      err << s
    else
      err << email_errors
    end

    if password_errors.kind_of?(Array)
      s = ""
      password_errors.each do |error|
        s = s + "* Password " + error + " "
      end
      err << s
    else
      err << password_errors
    end

    if password_confirmation_errors.kind_of?(Array)
      s = ""
      password_confirmation_errors.each do |error|
        s = s + "* Password confirmation " + error + " "
      end
      err << s
    else
      err << password_confirmation_errors
    end

    return err
  end
end
