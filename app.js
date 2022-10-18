//this is how we import the Employee, Manager class, etc.
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")
const inquirer = require ("inquirer")
//?
const generateSite = require('./src/page-template');
//file system required & path
const fs = require ("fs");
const path = require("path");
//??
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");


//this is where we're keeping track of our team and storing all of our info... EMPTY ARRAY
const teamMembers = [];


//tutoring notes: pass three paramaters (name, id, email)
    //const employee = new Employee ("Bettina", "2384", "bettina@gmail.com"
    //each thing in quotation marks is a string; this employee variable is a new instance of this employee. try console logging (employee.name) and employee.id and employee.sayhi -- name and id are properties and say hi is a method (acts like a function); if you run the app w that you'll get the above info in the terminal; a class is an object that we pass parameters in.


    
    //each question is going to be an object. need the [ to start bc its an array. objects = {}
const promptManager = () => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }, 
    {
        type: "input",
        name: "id",
        message: "What's your employee ID?"
    }, 
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What's your office number?"
    }
]).then(answers => {
    console.log(answers);
    const manage = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamMembers.push(Manager);
    promptMenu();
})
};

const menuChoices = {
    type: "list",
    name: "menuAnswer",
    message: "What do you want to do next?",
    choices: [
        "Create an Employee",
        "Finish"
    ]
}



//give the user an option of create an employee or finish w team...
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next? Select an option below.',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add an Engineer":
                    promptEngineer();
                    break;
                case "Add an Intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    };

//prompt the Engineer questions/function
const promptEngineer = () => {
    console.log(`
    ==================
    Add A New Engineer
    ==================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of Engineer',
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email)
        teamMembers.push(engineer);
        promptMenu();
    })
};


//this is how we call the prompt manager function!!
promptManager ()