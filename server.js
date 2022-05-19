const mysql = require('mysql2')
const inquirer = require('inquirer')
const cTable = require('console.table')

// require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_db',
  // multipleStatements: true,
})

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Miss you dad! We are connected on ID " + connection.threadId);
// });

connection.connect()

console.log('line 17')

const greeting = () => {
  console.log(`
  console.log("***********************************")
  console.log("*                                 *")
  console.log("*        EMPLOYEE MANAGER         *")
  console.log("*                                 *")
  console.log("***********************************")
  
  `)
  console.log('\n')
}
greeting()

function startPrompt() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [
          'View All Employees?',
          "View All Employee's By Roles?",
          'View all Emplyees By Deparments',
          'Update Employee',
          'Add Employee?',
          'Add Role?',
          'Add Department?',
        ],
      },
    ])
    .then(function (val) {
      switch (val.choice) {
        case 'View All Employees?':
          viewAllEmployees()
          break

        case "View All Employee's By Roles?":
          viewAllRoles()
          break
        case 'View all Emplyees By Deparments':
          viewAllDepartments()
          break

        case 'Add Employee?':
          addEmployee()
          break

        case 'Update Employee':
          updateEmployee()
          break

        case 'Add Role?':
          addRole()
          break

        case 'Add Department?':
          addDepartment()
          break
      }
    })
}

function viewAllEmployees() {
  connection.query(
    "SELECT employee.firstName, employee.lastName, role.title, role.salary, department.name, CONCAT(e.firstName, ' ' ,e.lastName) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err
      console.log('line 103')
      console.table(res)
      startPrompt()
    }
  )
}
function viewAllRoles() {
  connection.query(
    'SELECT employee.firstName, employee.lastName, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;',
    function (err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    }
  )
}
function viewAllDepartments() {
  connection.query(
    'SELECT employee.firstName, employee.lastName, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;',
    function (err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    }
  )
}
var roleArr = []
function selectRole() {
  connection.query('SELECT * FROM role', function (err, res) {
    if (err) throw err
    for (var i = 0; i < res.length; i++) {
      roleArr.push(res[i].title)
    }
  })
  return roleArr
}

var managersArr = []
function selectManager() {
  connection.query(
    'SELECT firstName, lastName FROM employee WHERE manager_id IS NULL',
    function (err, res) {
      if (err) throw err
      for (var i = 0; i < res.length; i++) {
        managersArr.push(res[i].firstName)
      }
    }
  )
  return managersArr
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: 'firstname',
        type: 'input',
        message: 'Enter their first name ',
      },
      {
        name: 'lastname',
        type: 'input',
        message: 'Enter their last name ',
      },
      {
        name: 'role',
        type: 'list',
        message: 'What is their role? ',
        choices: selectRole(),
      },
      {
        name: 'choice',
        type: 'rawlist',
        message: 'Whats their managers name?',
        choices: selectManager(),
      },
    ])
    .then(function (val) {
      var roleId = selectRole().indexOf(val.role) + 1
      var managerId = selectManager().indexOf(val.choice) + 1
      connection.query(
        'INSERT INTO employee SET ?',
        {
          firstName: val.firstName,
          lastName: val.lastName,
          manager_id: managerId,
          role_id: roleId,
        },
        function (err) {
          if (err) throw err
          console.table(val)
          startPrompt()
        }
      )
    })
}

function updateEmployee() {
  connection.query(
    'SELECT employee.lastName, role.title FROM employee JOIN role ON employee.role_id = role.id;',
    function (err, res) {
      console.log(res)
      if (err) throw err
      console.log(res)
      inquirer
        .prompt([
          {
            name: 'lastName',
            type: 'rawlist',
            choices: function () {
              var lastName = []
              for (var i = 0; i < res.length; i++) {
                lastName.push(res[i].lastName)
              }
              return lastName
            },
            message: "What is the Employee's last name? ",
          },
          {
            name: 'role',
            type: 'rawlist',
            message: 'What is the Employees new title? ',
            choices: selectRole(),
          },
        ])
        .then(function (val) {
          var roleId = selectRole().indexOf(val.role) + 1
          connection.query(
            'UPDATE employee SET WHERE ?',
            {
              lastName: val.lastName,
            },
            {
              role_id: roleId,
            },
            function (err) {
              if (err) throw err
              console.table(val)
              startPrompt()
            }
          )
        })
    }
  )
}

function addRole() {
  connection.query(
    'SELECT role.title AS Title, role.salary AS Salary FROM role',
    function (err, res) {
      inquirer
        .prompt([
          {
            name: 'Title',
            type: 'input',
            message: 'What is the roles Title?',
          },
          {
            name: 'Salary',
            type: 'input',
            message: 'What is the Salary?',
          },
        ])
        .then(function (res) {
          connection.query(
            'INSERT INTO role SET ?',
            {
              title: res.Title,
              salary: res.Salary,
            },
            function (err) {
              if (err) throw err
              console.table(res)
              startPrompt()
            }
          )
        })
    }
  )
}
function addDepartment() {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What Department would you like to add?',
      },
    ])
    .then(function (res) {
      var query = connection.query(
        'INSERT INTO department SET ? ',
        {
          name: res.name,
        },
        function (err) {
          if (err) throw err
          console.table(res)
          startPrompt()
        }
      )
    })
}

startPrompt()
