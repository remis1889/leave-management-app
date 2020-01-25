class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :employee_name, null:false
      t.string :email, unique: true, null:false
      t.integer :leave_balance
      
      t.references :manager, index: true, null:true

      t.timestamps
    end
  end
end
