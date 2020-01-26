class EmployeesController < ApplicationController

    before_action :set_employee, only: [:show, :new_requests]

    def show        
        respond_with @current_employee
    end

    def index
        respond_with Employee.all
    end

    def new_requests
        new_requests = @current_employee.subordinates.preload(:leave_applications).map{ |employee| employee.leave_applications }.flatten
        respond_with new_requests
    end

    private
    
    def set_employee
        @current_employee = Employee.find(params[:id])
    end 
end
