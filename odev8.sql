CREATE TABLE employee (
  id INTEGER,
  name VARCHAR(50),
  birthday DATE,
  email VARCHAR(100)
);


-- Verileri ekleme işlemi için örnek bir INSERT sorgusu
INSERT INTO employee (id, name, birthday, email)
VALUES (1, 'John Doe', '1990-01-01', 'john.doe@example.com'),
       (2, 'Jane Smith', '1995-03-15', 'jane.smith@example.com'),
       (3, 'Michael Brown', '1985-11','jane.smith@example.com');


-- Örnek UPDATE sorguları
UPDATE employee SET name = 'John Doe' WHERE id = 1;
UPDATE employee SET email = 'jane.smith@example.com' WHERE id = 2;
...
-- Örnek DELETE sorguları
DELETE FROM employee WHERE id = 1;
DELETE FROM employee WHERE name = 'Jane Smith';
...
