class UsersController < ApplicationController

  def new
    render :new
  end

  def show
    @user = User.find(session[:user_id])
    render :edit
  end

end
