// helpers.js
// This file is primarily responsible for generic database queries and interactions that can be reused regardless of entity
// https://node-postgres.com/features/queries

const {Pool, Client } = require('pg');
const Config = require('../config/config');

const pool = new Pool(Config.database_config);

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