# Ecommerce Backend Orm
- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Ecommerce video Demo
* https://drive.google.com/file/d/1UnMjhvnGMcAT0vRmn_qZ9utKGLRVK7LW/view

## Description
- This is application is meant to be used by running POSTMAN or Insomnia to run the routes to see how the database information is routed through a website for backend purposes. This application uses, mysql2, sequelize, and expressJS. I have used expressJS to listen for when the server is ran and to use our routes to get the information stored in the created database. Sequelize is used here to make the database models, seed information to the database to make the tables. I then use express to make get, post, put, and delete requests to display the necessary information back to the user while running these requests in either POSTMAN or Insomnia. 

* [Ecommerce Backend Orm](https://github.com/Canadianfaller7/ecommerce-backend-orm/ "Named link title")

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
- Install node.js to computer and run npm i to get all dependies installed to run the application
- Run mysql in terminal by typing 'mysql -u root -p', run following commands: 'source db/schema.sql;', 'use ecommerce_db;' This is all based on how you have your environemnt set up.
- In different Terminal, run 'node seeds/index.js' or 'npm run seed'. This will seed the information from the seeds folder to the database to be used.
- In mysql terminal, you can now run the following commands: 'show tables;' or 'select * from table_name;'. Here you will change table_name to the name of table you want to get information from.
- In different Terminal, run 'node server.js' or 'nodemon server.js' to run the server
- Open up POSTMAN or Insomnia, put in whatever localhost you are running on EX: 'http://localhost:3001/api/categories' to start getting information. You may then start running other requests: 'GET', 'POST', 'PUT', or 'DELETE'

## Usage
- Basic application to show how Express, mysql, and Sequelize can be used for backend on a fake ecommerce site.
* [Ecommerce Backend ORM](github.com/canadianfaller7/ecommerce-backend-orm/ "Named link title")
* [Ecommerce Demo](https://drive.google.com/file/d/1UnMjhvnGMcAT0vRmn_qZ9utKGLRVK7LW/view/ "Named link title")

## Credits
- N/A
- N/A
- N/A

## License 
Please refer to license page by clicking on the badge to learn more
- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT).


## Questions

- Github Profile: https://github.com/canadianfaller7
- Please feel free to email me at: canadianfaller7@gmail.com with any additional questions. 

