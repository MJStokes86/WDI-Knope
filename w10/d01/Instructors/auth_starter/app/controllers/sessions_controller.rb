class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    # find if any user has that email
    user = User.find_by(email: params[:email])
    
    # if that user exists and it has a password that was sent
    # user.authenticate checks the supplied password vs the one in the database
    if user && user.authenticate(params[:password])
      
      # save the user_id in the session hash
      session[:user_id] = user.id

      # and redirect to that user's settings page
      redirect_to edit_users_path
    else
      # the email/password is wrong!
      @message = "This email and password combination does not exist."
      render :new
    end
  end

  def destroy
    # Setting session[:user_id] to nil will cause the authenticate method in 
    # our application controller to recognize that the user is not logged in
    session[:user_id] = nil
    
    redirect_to new_sessions_path
  end
 

end
