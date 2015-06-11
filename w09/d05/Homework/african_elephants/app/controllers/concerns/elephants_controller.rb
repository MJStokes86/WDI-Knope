class ElephantsController < ApplicationContoller

	def index
		@elephants = Elephant.all
		render :index
	end

	def new
		@elephant = Elephant.new
		render :new
	end

	def create
		@elephant = Elephant.new
		@elephant = params[:name]
		@elephant = params[:age]
		@elephant = params[:has_tusks]

		if @elephant.save
			redirect_to "/elephants"
		else
			render :new
		end

	def edit
		@elephant = Elephant.find(params[:id])

		render :edit
	end

	def update
		@entry = Elephant.find(params[:id])
		@entry.update(name: params[:name], age: params[:age], has_tusks: params[:has_tusks])

		redirect_to '/'
	end

	def show
		@entry = Elephant.find(params[:id])
		render :show
	end
end
