INSERT INTO department(id, name) 
VALUES(1, 'Sales and Marketing'),
      (2, 'Product Development'),
      (3, 'IT Services');

INSERT INTO role(id, title, salary, department_id)
    VALUES(1, 'Sales Person', 82000, 1),
          (2, 'Project Lead', 110000, 2),
          (3, 'Full Stack Enginner', 98000, 2),
          (4, 'Desktop Support', 76000, 3);
          
INSERT INTO employee(id, firstName, lastName, role_id, manager_id)
    VALUES(1, 'Elvis', 'Elvis', 2, NULL),
          (2, 'Stephen', 'McInally', 3, 1),
          (3, 'Jordan', 'Michael', 4, NULL),
          (4, 'James', 'Folski', 4, 1),
          (5, 'Steve', 'Pearlman', 1, NULL),
          (6, 'Mike', 'Johnson', NULL, NULL)
          (7, 'Wesley', 'Parks', 2 NULL)
          (8, 'Bridget', 'MC', 4, 7);