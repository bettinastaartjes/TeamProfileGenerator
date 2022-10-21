//this is how we import the Employee, Manager class, etc.
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")
const inquirer = require ("inquirer")
//file system required & path
const fs = require ("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

//?
const generateSite = require("./src/page-template.js");


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
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamMembers.push(manager);
    promptMenu();
})
};

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
            name: 'engineerName',
            message: 'Enter name of Engineer',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter the Engineer ID',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter email address of Engineer',
        },
        {
            type: 'input',
            name: 'engineerGithubUsername',
            message: 'Enter Github Username of Engineer',
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

//prompt the Intern questions/function
const promptIntern = () => {
    console.log(`
    =================
    Add A New Intern
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Enter name of Intern',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter the Employee ID',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Enter name of school',
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamMembers.push(intern);
        promptMenu();
    })
};

// building the team
const buildTeam = () => {
    console.log(`
    =======================
    Finished Building Team
    =======================
    `);

    //Create output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

//this is how we call the prompt manager function!! and this is the first function that needs to be run
promptManager ()