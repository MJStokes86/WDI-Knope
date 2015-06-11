class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Helper method to return the currently logged in user, if there is one
  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      false
    end
  end

  def logged_in?
    current_user.present?
  end

  # Our easy way of checking if a user is logged in
  def authenticate 
    unless current_user
      redirect_to root
    end
  end

end
