# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Destroying existing data...'

Employee.destroy_all
LeaveApplication.destroy_all

puts 'Cleared existing data.'

COUNT = 100
MANAGER_COUNT = 5

# Create employees
puts 'Creating employees...'
MANAGER_COUNT.times do
  Employee.create(employee_name: Faker::Name.name, email: Faker::Internet.email, leave_balance: rand(31))
end

managers = Employee.pluck(:id)

(COUNT - MANAGER_COUNT).times do
    Employee.create(employee_name: Faker::Name.name, email: Faker::Internet.email, leave_balance: rand(31), manager_id: managers.sample)
  end
  

puts "#{COUNT} employees created."

puts 'Seeding Completed!'