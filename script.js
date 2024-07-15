const questions = [
    {
      question: "What is SQL?",
      answer: "It stands for Structured Query Language. A programming language used for interaction with relational database management systems (RDBMS). This includes fetching, updating, inserting, and removing data from tables."
    },
    {
      question: "What are SQL dialects? Give some examples.",
      answer: "The various versions of SQL, both free and paid, are also called SQL dialects. All the flavors of SQL have a very similar syntax and vary insignificantly only in additional functionality. Some examples are Microsoft SQL Server, PostgreSQL, MySQL, SQLite, T-SQL, Oracle, and MongoDB."
    },
    {
      question: "What are the main applications of SQL?",
      answer: "Using SQL, we can:\n\n- create, delete, and update tables in a database\n- access, manipulate, and modify data in a table\n- retrieve and summarize necessary information from a table or several tables\n- add or remove certain rows or columns from a table\n\nSQL allows querying a database in multiple ways. Additionally, SQL integrates easily with other programming languages such as Python or R."
    },
    {
      question: "What is an SQL statement? Give some examples.",
      answer: "Also known as an SQL command, it's a string of characters interpreted by the SQL engine as a legal command and executed accordingly. Some examples of SQL statements are SELECT, CREATE, DELETE, DROP, REVOKE, and more."
    },
    {
      question: "What types of SQL commands (or SQL subsets) do you know?",
      answer: "There are several types:\n\n- Data Definition Language (DDL): to define and modify the structure of a database.\n- Data Manipulation Language (DML): to access, manipulate, and modify data in a database.\n- Data Control Language (DCL): to control user access to the data in the database and give or revoke privileges.\n- Transaction Control Language (TCL): to control transactions in a database.\n- Data Query Language (DQL): to perform queries on the data in a database to retrieve necessary information."
    },
    {
      question: "Give some examples of common SQL commands of each type.",
      answer: "Examples include:\n\n- DDL: CREATE, ALTER TABLE, DROP, TRUNCATE, ADD COLUMN\n- DML: UPDATE, DELETE, INSERT\n- DCL: GRANT, REVOKE\n- TCL: COMMIT, ROLLBACK, SAVEPOINT\n- DQL: SELECT"
    },
    {
      question: "What is a database?",
      answer: "A structured storage space where data is kept in many tables and organized for easy retrieval, manipulation, and summarization of information."
    },
    {
      question: "What is DBMS, and what types do you know?",
      answer: "DBMS stands for Database Management System. It's a software package used to perform operations on data stored in a database. Types include relational, hierarchical, network, graph, and object-oriented DBMS, each organizing and storing data differently."
    },
    {
      question: "What is RDBMS? Give some examples.",
      answer: "RDBMS stands for Relational Database Management System. It's the most common type used for working with data stored in multiple tables related by shared keys. Examples include MySQL, PostgreSQL, Oracle, and MariaDB."
    },
    {
      question: "What are tables and fields in SQL?",
      answer: "A table is an organized set of related data stored in rows and columns. A field, also known as a column, represents an attribute of the data."
    },
    {
      question: "What is an SQL query, and what types do you know?",
      answer: "An SQL query is a piece of code written to retrieve or modify data in a database. Types include SELECT queries for retrieving data and action queries for modifying data."
    },
    {
      question: "What is a subquery?",
      answer: "A subquery, or inner query, is a query nested within another query or SQL statement. It can occur in clauses like SELECT, FROM, WHERE, and more, and can itself contain additional subqueries."
    },
    {
      question: "What types of SQL subqueries do you know?",
      answer: "Types include single-row, multi-row, multi-column, correlated, and nested subqueries, each serving specific purposes in SQL operations."
    },
    {
      question: "What is a constraint, and why use constraints?",
      answer: "Constraints are rules that define the type of data that can be input into a column of a table. They ensure data integrity by preventing actions that would compromise the accuracy or consistency of the data."
    },
    {
      question: "What SQL constraints do you know?",
      answer: "Common SQL constraints include DEFAULT, UNIQUE, NOT NULL, PRIMARY KEY, and FOREIGN KEY, each enforcing specific data rules within a table."
    },
    {
      question: "What is a join?",
      answer: "A join is a SQL operation used to combine records from two or more tables based on a related column between them."
    },
    {
      question: "What types of joins do you know?",
      answer: "Types include INNER JOIN (default join), LEFT JOIN, RIGHT JOIN, and FULL JOIN, each specifying different ways to combine records from related tables."
    },
    {
      question: "What is a primary key?",
      answer: "A primary key is a column or set of columns that uniquely identifies each row in a table. It enforces uniqueness and non-null constraints on its values."
    },
    {
      question: "What is a unique key?",
      answer: "A unique key is a column or set of columns that ensures all values are unique within that column, including allowing one NULL value."
    },
    {
      question: "What is a foreign key?",
      answer: "A foreign key is a column or set of columns in one table that references the primary key in another table, establishing a link between the two tables."
    },
    {
      question: "What is an index?",
      answer: "An index is a database structure that improves the speed of data retrieval operations on a table at the cost of additional storage space and reduced write performance."
    },
    {
      question: "What types of indexes do you know?",
      answer: "Types include unique indexes (to enforce uniqueness), clustered indexes (to physically order data), and non-clustered indexes (to improve data retrieval performance without physically ordering data)."
    },
    {
      question: "What is a schema?",
      answer: "A schema is a collection of database objects (tables, views, indexes, etc.) associated with a particular database user. It defines the structure, organization, and relationships between objects in a database."
    },
    {
      question: "What is a SQL comment?",
      answer: "A SQL comment is a note within SQL code that is not executed by the database engine. It is used to document the code for readability and understanding by developers and database administrators."
    }
  ];
  
  function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const questionContainer = document.getElementById('question-container');
    const question = questions[randomIndex].question;
  
    // Display the question
    questionContainer.innerHTML = `<h2>${question}</h2><p style="display: none;">${questions[randomIndex].answer}</p>`;
  }
  
  function revealAnswer() {
    const answer = document.querySelector('#question-container p');
    answer.style.display = 'block';
  }
  