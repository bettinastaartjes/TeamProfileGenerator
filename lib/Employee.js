//we are defining the class here, in this case Employee
    // first thing we need is constructor; this is what helps us to define a class; just like any function, we can pass parameters onto it. These parameters (name, id, email) go inside our constructor.
    // when we get those three things, what we are going to assign them to in this class? this.name will be that name; so this.name=name and so-on

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //we can also build methods ontop of this like the below. this is a class below.
    getName () {
        return "Employee's name is" + this.name;
    }
    getId() {
        return "Employee's ID is" + this.id;
    }
    getEmail() {
        return "Employee's email is" + this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee