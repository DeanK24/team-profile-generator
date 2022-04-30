const generateHTML = require("./src/generateHTML");

// team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter the manager name!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Enter the manager's ID!");
          return false;
        } else {
          return true;
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "Enter manager's email.",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("enter an email please");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "officeNumber",
      message: "enter the manager's office number!",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("enter an office number!");
          return false;
        } else {
          return true;
        }
      },
    },
  ])

    .then(managerInput => {
        const {name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employee to the team
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select a role for your employee.",
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is your employee name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter a name please!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'enter employee ID.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("enter employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        
        {
            type: 'input',
            name: 'email',
            message: 'Enter a employee Email.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Enter an email please!')
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'github',
            message: 'Enter your employee github',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's github!");
                }
            }
        },
        
        {
            type: 'input',
            name: 'school',
            message: 'Enter Intern school',
            when: (input) => input.role === "Intern",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's school");
                }
            }
        },
        
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])

    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee)
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The team profile has successfully been created! Look at index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });


