//because an Engineer is also an employee, we need to import the Employee class. This employee is going to..... 
const Employee = require ("./Employee")

//extends bc an Engineer is an extension of Employee
class Engineer extends Employee{
    constructor (name, id, email, githubUsername) {
        //super sends it up to whatever it's extending
        super(name, id, email);
        //we're takig those three parameters and taking them over to the Employee class, so all we have left is to define the github...
        this.githubUsername = githubUsername;
    }

    getRole () {
        return "Engineer";
    }

    getGithub () {
        return this.githubUsername
    }
}

module.exports = Engineer;
