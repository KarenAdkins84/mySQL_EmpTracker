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
            message: "Enter department"

        }
    ).then(input => {
        const sql = "INSERT INTO department VALUE (?)" 
        db.query(sql, input.Dept, (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res)
        })
    })
}



promptUser()