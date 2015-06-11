class TicketsController < ApplicationController 

	def index
		@tickets = Ticket.all
		render :index
	end

	def new
		@ticket = Ticket.new
		render :new
		end

	def create
		@ticket = Ticket.new
		@ticket.menu_item = params[:menu_item]
		@ticket.comments = params[:comments]
		@ticket.table_number = params[:table_number]

		if @ticket.save
			redirect_to '/tickets'
		else
			render :new
		end
	end

	def edit
		@ticket = Ticket.find(params[:id])
		render :edit
	end

	def update
		@ticket = Ticket.find(params[:id])
		@ticket.update(menu_item: params[:menu_item], comments: params[:comments], table_number: params[:table_number])

			redirect_to '/'
		end

	def show
		@ticket = Ticket.find(params[:id])
		render :show
	end












end
