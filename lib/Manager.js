//we want to send the name, id, and email up to the employee because a manager is an employee but has an office number. we need to import the Employee class, like below.  
const Employee = require ("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
}

module.exports = Manager