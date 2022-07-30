# Todo List

A full stack Todo List app where users can keep track of their tasks and be able to delete them if completed.

![Registration](https://github.com/Cloud9NB/ToDo-List/blob/main/front-end/public/docs/screenshots/registration.png?raw=true)
![Todo Form](https://github.com/Cloud9NB/ToDo-List/blob/main/front-end/public/docs/screenshots/main-page.png?raw=true)
![Edit Form](https://github.com/Cloud9NB/ToDo-List/blob/main/front-end/public/docs/screenshots/edit-form.png?raw=true)
![404](https://github.com/Cloud9NB/ToDo-List/blob/main/front-end/public/docs/screenshots/404.png?raw=true)

## Creating the DB

Copy the `.env.example` file to `.env` in `back-end` and fill in the necessary PostgreSQL configuration.

Create a database with the command `CREATE DATABASE todolist;`.

Run command to create the tables inside the database:

`\i back-end/src/db/schema/create.sql;`

## Running the project

First make sure you are using the right node. To do that run `nvm use 16.15.0` before installing the packages.

You need **TWO** other terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `front-end`. Run `npm install`. Then run `npm start` and go to `http://localhost:3000/` in your browser.

In the other terminal, `cd` into `back-end`. Run `npm install` then `npm start` to launch the server.

## Dependencies

- `Axios`: Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6
- `Bcryptjs`: Password encryption in Node.js
- `Classnames`: A simple utility for conditionally joining classNames together
- `Mdb-ui-kit`: Bootstrap 5 UI KIT
- `React`: JavaScript library for building user interfaces
- `Body-parser`: A body parsing middleware
- `Cors`: Provides a Connect/Express middleware that can be used to enable CORS with various options
- `Dotenv`: Loads environment variables from a .env file into process.env
- `Express`: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- `Nodemon`: A tool that helps Node.js applications to automatically restarts when file changes in the directory are detected
- `PG`: Non-blocking PostgreSQL client for Node.js
- `React-Router-Dom`: Enables you to implement dynamic routing in a web app
- `Bcryptjs`: Hashes password and compares hashed password to regular password
