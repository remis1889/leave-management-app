Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :employees, only: :show do
    resources :leave_applications, except: :show
  end  
end

