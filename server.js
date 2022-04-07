
const inquirer = require("inquirer");
const cTable = require('console.table');
const connection = require('./connection')

// require('dotenv').config();

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

const options = () => {
  inquirer.prompt([{}])
};

