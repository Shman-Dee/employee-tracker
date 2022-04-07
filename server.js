const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

// require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

const greeting = () => {
  console.log(`
  console.log("***********************************")
  console.log("*                                 *")
  console.log("*        EMPLOYEE MANAGER         *")
  console.log("*                                 *")
  console.log("***********************************")
  
  `);
  console.log("\n");
  
};
greeting();

connection.connect(function (err) {
  if (err) throw err;
  console.log("Miss you dad! We are connected on ID " + connection.threadId);
});

function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Employees?",
          "View All Employee's By Roles?",
          "View all Emplyees By Deparments",
          "Update Employee",
          "Add Employee?",
          "Add Role?",
          "Add Department?",
        ],
      },
    ])
    .then(function (val) {
      switch (val.choice) {
        case "View All Employees?":
          viewAllEmployees();
          break;

        case "View All Employee's By Roles?":
          viewAllRoles();
          break;
        case "View all Emplyees By Deparments":
          viewAllDepartments();
          break;

        case "Add Employee?":
          addEmployee();
          break;

        case "Update Employee":
          updateEmployee();
          break;

        case "Add Role?":
          addRole();
          break;

        case "Add Department?":
          addDepartment();
          break;
      }
    });
}
startPrompt();
