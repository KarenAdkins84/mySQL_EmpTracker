const inquirer = require('inquirer')
const mysql = require('mysql2');
//const { allowedNodeEnvironmentFlags } = require('process');
//const consoleTable = require('console-table');
//const { listenerCount } = require('process');

const db = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: 'Hayden112918!',
    database: 'empTracker_db'
});

function promptUser() {
    inquirer.prompt(
        [
            {
                type: "list",
                name: "startOptions",
                message: "What would you like to do?",
                choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "exit"]
            }
            
        ]

    ).then(option => {
        console.log(option)
        if (option.startOptions === "view all departments") {
            viewDepartments()
        } else if (option.startOptions === "view all roles") {
            viewRoles()
        } else if (option.startOptions === "view all employees") {
            viewEmployees()
        } else if (option.startOptions === "add a department") {
            addDepartment()
        } else if (option.startOptions === "add a role") {
            addRole()
        } else if (option.startOptions === "add an employee") {
            addEmployee()
        } else if (option.startOptions === "update an employee") {
            updateEmployee()
        } else console.log("Thanks for using our application.")
    })
}

function viewDepartments() {
    const sql = "SELECT * FROM department"
    db.query(sql, (err, res) => {
        console.table(res)
    }) 
}

const viewRoles = () => {
    const sql = "SELECT * FROM role"
    db.query(sql, (err, res) => {
        console.table(res)
})
}

const viewEmployees = function () {
    const sql = "SELECT * FROM employee"
    db.query(sql, (err, res) => {
        console.table(res)
})
}

const addDepartment = () => {
    inquirer.prompt(
        {
            type: "input",
            name: "Dept",
            message: "Enter department name"

        }
    ).then(input => {
        const sql = "INSERT INTO department (name) VALUES (?)" 
        db.query(sql, input.Dept, (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res)
        })
    })
}

const addRole = () => {
    inquirer.prompt(
        [{
            type: "input",
            name: "role title",
            message: "Enter role title"

        },
        {
            type: "input",
            name: "role salary",
            message: "enter role salary"
        },
    {
        type: "input",
        name: "role dept id",
        message: "enter role department id"
    }]
    ).then(input => {
        const sql = "INSERT INTO role (title, salary, department_id) VALUES (?)" 
        db.query(sql, input.Role, (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res)
        })
    })
}

const addEmployee = () => {
    inquirer.prompt(
        {
            type: "input",
            name: "Employee",
            message: "Enter employee"

        }
    ).then(input => {
        const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)" 
        db.query(sql, input.Employee, (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res)
        })
    })
}


promptUser()