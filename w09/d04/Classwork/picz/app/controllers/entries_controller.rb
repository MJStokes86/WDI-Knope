class EntriesController < ApplicationController

  def index
    @entries = Entry.all
    render :index
  end

  def new
    @entry = Entry.new
    render :new
  end

  def create
    @entry = Entry.new
    @entry.author = params[:author]
    @entry.photo_url = params[:photo_url]
    @entry.date_taken = params[:date_taken]

    if @entry.save
      redirect_to "/entries"
    else 
      render :new
    end
  end

  def edit
    @entry = Entry.find(params[:id])

    render :edit

  end

  def update
    @entry = Entry.find(params[:id])
    @entry.update(author: params[:author], photo_url: params[:photo_url], date_taken: params[:date_taken])

redirect_to '/'
end




  def show
    @entry = Entry.find(params[:id])
    render :show
  end

end