//this is where we're keeping track of our team and storing all of our info... 
const team = [
]

//this is how we import the Employee, Manager class, etc.
const Employee = require ("./lib/Employee")
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")
const inquirer = require ("inquirer")

//pass three paramaters (name, id, email)
    //const employee = new Employee ("Bettina", "2384", "bettina@gmail.com"
    //each thing in quotation marks is a string; this employee variable is a new instance of this employee. try console logging (employee.name) and employee.id and employee.sayhi -- name and id are properties and say hi is a method (acts like a function); if you run the app w that you'll get the above info in the terminal; a class is an object that we pass parameters in.


    //each question is going to be an object. need the [ to start bc its an array. objects = {}
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name (or your managers name)"
    }, 
    {
        type: "input",
        name: "id",
        message: "What's your ID?"
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
]

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter employees name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter employees ID."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter employee's email."
    }
]

const menuChoices = {
    type: "list",
    name: "menuAnswer",
    message: "What do you want to do next?",
    choices: [
        "Create an Employee",
        "Finish"
    ]
}

//define a function called promptManager -- paranthesis, curly braces. 
function promptManager () {
    inquirer.prompt (managerQuestions)
    //any variable you put in there (after the .then) will be whatever this is returning. 
    .then (managerAnswers => {
        console.log (managerAnswers)
        //new Manager is two words bc its a new instance of this manager class; put all 4 things into these parenthesis ();
        const manager = new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        team.push (manager) //now manager is inside team array at the top
        //call the prompt menu function for this to pop up after you add manager to team
        promptMenu()
    })
}

function promptEmployee () {
    inquirer.prompt (employeeQuestions)
    .then (employeeAnswers => {
        console.log (employeeAnswers)
        const employee = new Employee (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.id)
        team.push (employee)
        promptMenu()
    })
}

//give the user an option of create an employee or finish w team...
function promptMenu () {
    inquirer.prompt (menuChoices)
    .then(menuAnswers => {
        console.log (menuAnswers)
    })
}

//this is how we call the prompt manager function!!
promptManager ()