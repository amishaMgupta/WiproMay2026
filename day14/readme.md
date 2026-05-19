  -- subquery
  -- the inner query in amy query is called the subquery
  -- Sql Statement Where(inner query)
  
  
  SELECT 
    empName, salary
FROM
    employee
WHERE
    salary > (SELECT 
            AVG(salary)
        FROM
            employee);
  
-- Inner query 
select AVG(salary) from employee;


select empName from employee where deptId in (Select deptId from department where department in ('HR','IT'));

Select deptId from department where department in ('HR','IT');

-- Transaction
-- take care of ACID properties
-- A:- Atomicity ->All or Nothing
-- C:- Consistency -> data remains valid
-- I:- Isolation -> Transactions don't interfere with each other
-- D:- Durability -> saved changes remain after commit
-- Transaction Commands
-- Start Transaction:
--     - start Transaction
-- commit Transaction:
--     - commit
-- Rollback Transaction
--     - RollBack
-- Savepoints
--     -savepoint point
--     

START TRANSACTION;

update employee set salary = salary -1000 where empId = 2;
savepoint step1;
update employee set salary = salary + 1000 where empId = 5;
Rollback to step1;
Commit; 
select * from employee

# Nodejs
- What is Node.js?
- History of Node.js
- Features and advantages
- Installing Node.js
- Understanding npm (Node Package Manager)
- Creating a simple Node.js application
- fs (File System)
- http/https (HTTP/HTTPS Servers and Clients)
- path (File and Directory Paths)
- events (EventEmitter)
- Callbacks
- Promises
- Async/Await

