
class UsersController < ApplicationController

	before_action : authenticate, except: [:new, :create]

	def new
		render :new
	end

	def edit
		puts "use show page"

		@user = current_user

		render :edit
	end
end

