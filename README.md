# Leave Manager App

A simple leave management app where employees can apply for leave and their managers can approve/decline leave requests.

## Setup Rails API
To set everything up after cloning this repo and starting PostgreSQL:

```
$ bundle install
$ rails db:create db:migrate
$ rails db:seed:development
$ rails db:test:prepare
```

This will generate sample employee accounts for manual testing:

- 100 Employee records 
- Employee can submit many Leave Applications
- Each Employee belongs to a Manager who is also an Employee
- Each Manager has many Leave Requests which can be accepted or declined

All sample accounts use the password `admin`.




