INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Mike', 'Millter', 3, null),
('Kevin', 'Ders', 2, 1),
('Marth', 'Blue', 5, null),
('Ash', 'Wednesday', 4, 3),
('Ty', 'Mover', 7, null),
('Annette', 'Swartz', 6, 5),
('Lou', 'Alien', 8, null),
('Kathy', 'Pink', 9, 7);