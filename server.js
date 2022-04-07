const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require('console.table');

require('dotenv').config();

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