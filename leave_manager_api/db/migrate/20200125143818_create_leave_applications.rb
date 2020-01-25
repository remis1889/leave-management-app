class CreateLeaveApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :leave_applications do |t|
      
      t.date :from, null:false
      t.date :to, null:false
      t.text :reason, null:true
      t.integer :status, default:0
      t.text :comments, null:true

      t.references :employee, index:true

      t.timestamps
    end
  end
end
