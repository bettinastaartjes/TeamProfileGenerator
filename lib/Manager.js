//we want to send the name, id, and email up to the employee because a manager is an employee but has an office number. we need to import the Employee class, like below.  
const Employee = require ("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        //calling the parent constructor using "super"
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    //!
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager