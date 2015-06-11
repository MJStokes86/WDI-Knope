Rails.application.routes.draw do 
	root 'elephants#index'
	resources :elephants, only: [:index, :new, :create, :show, :edit, :update, :destroy]

end