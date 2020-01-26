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
SUBORDINATES = COUNT - MANAGER_COUNT

# Create employees
puts 'Creating employees...'

puts 'Adding Managers'
MANAGER_COUNT.times do
  Employee.create(employee_name: Faker::Name.name, email: Faker::Internet.email, leave_balance: rand(31))
end

managers = Employee.pluck(:id)

puts 'Adding Subordinates'
SUBORDINATES.times do
  Employee.create(employee_name: Faker::Name.name, email: Faker::Internet.email, leave_balance: rand(31), manager_id: managers.sample)
end
  
puts "#{COUNT} employees created."


# select random employees to add applications
def selected_employees
  Employee.where("leave_balance < #{MANAGER_COUNT} AND manager_id IS NOT NULL").order('RANDOM()').first(MANAGER_COUNT)
end

# Add Leave Applications
puts 'Adding leave applications...'

selected_employees.each do |employee|
  rand(3..5).times do
    from = Date.today + rand(1..5)
    to = Date.today + rand(6..10)
    random_status = rand(3)
    manager_comments = Faker::Lorem.paragraph unless random_status.zero?
    LeaveApplication.create(from: from, to: to, reason: Faker::Lorem.paragraph, status: random_status, comments: manager_comments, employee_id: employee.id)    
  end
end
puts 'Leave Applications created.'

puts 'Seeding Completed!'