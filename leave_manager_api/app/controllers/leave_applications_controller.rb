class LeaveApplicationsController < ApplicationController

    before_action :get_employee
    before_action :set_leave_application, only: [:update, :destroy]

    def index
        @leave_applications = @employee.leave_applications
        respond_with @leave_applications
    end

    def create
        @leave_application = @employee.leave_applications.build(leave_application_params)
        @leave_application.save            
    end

    def update
        @leave_application.update(leave_application_params)
    end

    def destroy
        @leave_application.destroy        
    end

    private
    
    def get_employee
        @employee = Employee.find(params[:employee_id])
    end  

    def set_leave_application
        @leave_application = @employee.leave_applications.find(params[:id])
    end

    def leave_application_params
        params.require(:leave_application).permit(:from, :to, :reason, :employee_id, :status, :comments)
    end
end
