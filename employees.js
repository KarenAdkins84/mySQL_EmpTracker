const inquirer = require('inquirer')
const mysql = require('mysql2');
const cTable = require('console.table');
const dotenv = require(dotenv);


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
        } else if (option.startOptions === "update an employee role") {
            updateEmployeeRole()
        } else console.log("Thanks for using our application.")
    })
}

function viewDepartments() {
    const sql = "SELECT * FROM department"
    db.query(sql, (err, res) => {
        console.table(res)
        promptUser()
    }) 
}

const viewRoles = () => {
    const sql = "SELECT * FROM role"
    db.query(sql, (err, res) => {
        console.table(res)
        promptUser()
})
}

const viewEmployees = function () {
    const sql = "SELECT * FROM employee"
    db.query(sql, (err, res) => {
        console.table(res)
        promptUser()
})
}

const addDepartment = () => {
    inquirer.prompt(
        {
            type: "input",
            name: "deptName",
            message: "Enter department name"

        }
    ).then(input => {
        const sql = "INSERT INTO department (name) VALUES (?)" 
        db.query(sql, input.deptName, (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res)
            promptUser()
        })
    })
}


const addRole = () => {
    inquirer.prompt(
        [{
            type: "input",
            name: "roleTitle",
            message: "Enter role title"

        },
        {
            type: "input",
            name: "roleSalary",
            message: "Enter role salary"
        },
    {
        type: "input",
        name: "roleDeptId",
        message: "Enter role department id"
    }]
    ).then(input => {
        const sql = "INSERT INTO role (title, salary, department_id) VALUES(?,?,?)" 
        db.query(sql, (input.roleTitle, input.roleSalary, input.roleDeptId), (err, res))
            if (err) {
                console.log(err)
            }
            console.table(res)
            promptUser()
        })
    }


const addEmployee = () => {
    inquirer.prompt(
        [{
            type: "input",
            name: "empFirstName",
            message: "Enter employee's first name"

        },
        {
            type: "input",
            name: "empLastName",
            message: "Enter employee's last name"
        },
        {
            type: "input",
            name: "empRoleId",
            message: "Enter employee's role id"
        },
        {
            type: "input",
            name: "empManagerId",
            message: "Enter the employee's manager's id"
        }]
    ).then(input => {
        const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?),(?),(?),(?)" 
        db.query(sql, (input.empFirstName, input.empLastName, input.empRoleId, input.empManagerId), (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res)
            promptUser()
        })
    })
}
//add updateEmployee//
// const updateEmployeeRole = () => {
//     inquirer.prompt(
//         {
//             type: "list",
//             name: "updateEmpRole",
//             message: "Choose an employee to update",
//             choices: ["const sql = SELECT * FROM employee"]
//         }
//     )
// }

promptUser()