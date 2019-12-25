require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_path
    assert_response :success
  end

  test "should get show" do
    get user_path
    assert_response :success
  end

  test "should get new" do
    get new_user_path
    assert_response :success
  end

  test "should get edit" do
    get edit_user_path
    assert_response :success
  end

end
