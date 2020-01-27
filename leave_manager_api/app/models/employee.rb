class Employee < ApplicationRecord
    has_many :subordinates, class_name: "Employee", foreign_key: "manager_id"
    belongs_to :manager, class_name: "Employee", optional: true
    has_many :leave_applications, dependent: :destroy      

    validates :employee_name, :email, presence: true
    validates :email, uniqueness: true
    validates_format_of :email, with: /\A([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})\z/i
end

