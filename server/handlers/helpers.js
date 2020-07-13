// helpers.js
// This file is primarily responsible for generic database queries and interactions that can be reused regardless of entity
// https://node-postgres.com/features/queries

const {Pool, Client } = require('pg');

const dbConfig =  {"user": process.env.DATABASE_USER,
"host": process.env.DATABASE_HOST,
"database" : process.env.DATABASE_DB,
"password": process.env.DATABASE_PW,
"port": process.env.DATABASE_PORT}


const pool = new Pool(
   dbConfig
  );

// example from postgres client npm site
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  });
  

async function runQuery(queryText) {
  // connect to database

  // run query

  // get response

  // handle error

  // close connection

  // return result
};

async function insertData(insertText) {

}

async function deleteData(deleteText) {

}


async function updateData(updateText) {

}

module.exports = {insertData, runQuery, deleteData, updateData};