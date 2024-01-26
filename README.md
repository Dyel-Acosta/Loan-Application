# Loan-App

This is a single-page application designed to fetch information about employers and job titles and put in a table to be used in a Loan Management system.

## Direct Link to View the Application

To access the application, click on the following link: https://dyel-acosta.github.io/Loan-App/

**Note: If it appears blank, data is loading.**

### No External Dependencies were Installed
You can downloand the application and run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Bonus Questions:
### Question 1. What's the difference between 'const' and 'var' in JavaScript?
In JavaScript, we have three keywords `var`, `let`, and `const` for declaring variables. Among them, `var` is the oldest. It provides function scope (Global scope), meaning variables declared with var outside a function can be accessed globally, and those declared inside a function are accessible only within that function. On the other hand, `const` a value has to be assigned, and prohibits updates thereafter, hence having the characteristic of immutability.


### Question 2. Write a query to return all customers from a table named users where the age is greater than 25.

We will need to filter the "users" using the command WHERE. The query is as follows:
**`SELECT *`
<br>
`FROM users` 
<br>
`WHERE age > 25`**


This query will return all rows from the "users" table where the value in the age column is greater than 25.

### Question 3. What's the difference between inner join and left join in sql. 

`Inner Join` is used when we want to return records having pair on both sides (matching values in both tables), whilst `Left Join` is utilized when we need records from the "left" table, and the matched records from the right table. This concept can be illustrated using Venn diagrams for better visulization. 

<br>

# Application Interface

The image illustrates the visual representation of the application. It possesses the capability to search for employers in real-time. If there's a need to switch between tables, one can simply click on the "Employer" and "Job List" options located in the top left corner.

![Github logo](https://github.com/Dyel-Acosta/Loan-Application/blob/47c0b2862b0c7964e171e18d4d87ec10949cbd88/APP.png)



