# Leave Manager App

A simple leave management app where employees can apply for leave and their managers can approve/decline leave requests.

## Setup Rails API
To set everything up after cloning this repo and starting PostgreSQL:

```
$ cd leave_manager_api
$ bundle install
$ rails db:create db:migrate
$ rails db:seed:development
$ rails db:test:prepare
```

This will generate sample employee accounts for manual testing:

- 100 Employee records 
- Few randomly chosen Employees have few Leave Application records
- Each Employee belongs to a Manager who is also an Employee
- Each Manager has many Leave Requests which can be accepted or declined

All sample accounts use the password `admin`.

## Setup Angular App

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally. 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 


