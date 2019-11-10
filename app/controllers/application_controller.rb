class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def get_errors(errors)
    errorArr = []
    errorMsg = ""

    first_name_errors = errors[:first_name]
    last_name_errors = errors[:last_name]
    email_errors = errors[:email]
    password_errors = errors[:password]
    password_confirmation_errors = errors[:password_confirmation]

    if first_name_errors.kind_of?(Array)
      errorMsg = "* First name " + first_name_errors[0].to_s
    else
      errorMsg = "* First name " + first_name_errors.to_s
    end
    errorArr << errorMsg

    if last_name_errors.kind_of?(Array)
      errorMsg = "* Last name " + last_name_errors[0].to_s
    else
      errorMsg = "* Last name " + last_name_errors.to_s
    end
    errorArr << errorMsg

    if email_errors.kind_of?(Array)
      errorMsg = "* Email " + email_errors[0].to_s
    else
      errorMsg = "* Email " + email_errors.to_s
    end
    errorArr << errorMsg

    if password_errors.kind_of?(Array)
      errorMsg = "* Password " + password_errors[0].to_s
    else
      errorMsg = "* Password " + password_errors.to_s
    end
    errorArr << errorMsg

    if password_confirmation_errors.kind_of?(Array)
      errorMsg = "* Password confirmation " + password_confirmation_errors[0].to_s
    else
      errorMsg = "* Password confirmation " + password_confirmation_errors.to_s
    end
    errorArr << errorMsg

    return errorArr
  end
end
