require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get root_path
    assert_response :success
  end

  test "should get about" do
    get about_path
    assert_response :success
  end

  test "should get services" do
    get services_path
    assert_response :success
  end

  test "should get contact" do
    get contact_path
    assert_response :success
  end

  test "should get calendar" do
    get calendar_path
    assert_response :success
  end

  test "should get bible" do
    get bible_path
    assert_response :success
  end

  test "should get donate" do
    get donate_path
    assert_response :success
  end

  test "should get documents" do
    get documents_path
    assert_response :success
  end

  test "should get faq" do
    get faq_path
    assert_response :success
  end

end
