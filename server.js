const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require('console.table');

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
console.log('\n')}
greeting();

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    greeting();})

const options = () => {
  inquirer.prompt([{}])
};

