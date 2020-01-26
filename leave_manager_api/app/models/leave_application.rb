class LeaveApplication < ApplicationRecord
    belongs_to :employee
    validates :from, :to, presence: true  
    after_update :reduce_leave_balance, if: :leave_application_approved?

    PENDING = 0
    APPROVED = 1
    DECLINED = 2
    
    def total_days
        (to - from).to_i
    end

    def leave_application_approved?
        status == APPROVED
    end

    def reduce_leave_balance        
        current_balance = employee.leave_balance - total_days
        employee.update(leave_balance: current_balance)
    end

end
