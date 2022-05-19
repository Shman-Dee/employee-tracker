
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    role_id INT,
    manager_id INT,
    INDEX manager_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);

-- DEPARTMENT SEEDS -----
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- EMPLOYEE ROLE SEEDS -------
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);

-- EMPLOYEE SEEDS -------
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Jessica", "Haze", null, 1);
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Tiffany", "Patric", null, 2);
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Mia","Lam",null,3);
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Bently", "Lao", 1, 4);
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Chris", "Melby", 4, 5);
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Jason", "Baker", 1, 6);
INSERT INTO employee (firstName, lastName, manager_id, role_id)
VALUE ("Tom", "Nice", 2, 7);

-- SELECTING FOR CREATING 
--TABLES IN OUR SQL WORKBENCH 
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;