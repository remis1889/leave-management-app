class LeaveApplication < ApplicationRecord
    belongs_to :employee
    validates :from, :to, presence: true    
end
