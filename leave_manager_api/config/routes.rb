Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :employees, only: [:show, :index] do
    member do
      get 'new_requests'
    end
    resources :leave_applications, except: :show
  end  
end

