Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :cats, only: [:index, :update, :destroy]
    get 'my_cats', to: 'cats#my_cats'
  end
  
  get '*other', to: 'static#index'
end
