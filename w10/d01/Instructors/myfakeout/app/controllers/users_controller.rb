
class UsersController < ApplicationController

  def create
    name = Faker::Name.name
    email = Faker::Internet.free_email
    @new_user = User.create({name: name, email: email})
    redirect_to "/users/#{@new_user.id}"
  end

  def show
    @user = User.find(params["id"])
  end

end