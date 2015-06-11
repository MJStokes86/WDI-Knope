Rails.application.routes.draw do
  root 'entries#index'
  resources :entries, only: [:index, :new, :create, :show, :edit, :update, :destroy]
end