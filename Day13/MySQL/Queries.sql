-- Create database
create database Expense;
-- sHOW THE DATABASE
show databases;
-- uSE THE DATABASE YOU HAVE CREATED
use Expense
-- Create Table
create table users (
user_id int primary Key auto_increment,
first_name varchar(25) not null,
last_name varchar(25),
email varchar(100) not null,
password varchar( 25 ) not null);
-- Insert Record
insert into users values(1,"john","mac","john@gmail.com","john");
insert into users values(2,"Emma","j","emma@gmail.com","Johson");
insert into users values(3,"Charlotte","Brown","cbgmail.com","brown");
insert into users values(4,"Sophia","wilson","soph@gmail.com","wilson");
insert into users values(5,"Amelia","Tylor","jAmelia@gmail.com","Tylor");
-- see the table structure
desc Users;

Update users set password = "jack" where user_id =1; 

Delete from users where user_id = 1;
select * from users;

select first_name,last_name from users where user_id = 1;

select first_name as name, last_name as lname from users where user_id = 1;