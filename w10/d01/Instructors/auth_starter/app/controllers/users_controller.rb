class UsersController < ApplicationController
  # Will only execute controller methods after executing the before_action method.
  # Of course, it will not authenticate for new and create because that is what we specified below
  before_action :authenticate, except: [:new, :create]

  def new
    render :new
  end

  def edit
    puts "use show page"
   
    # We can use the current_user method in the application_controller to get the user.
    @user = current_user
   
    render :edit
  end
end
