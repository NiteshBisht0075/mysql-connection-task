const mysql =require("promise-mysql");
require('dotenv').config({path:"src/.env"});
async function query(sql) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  try {
    console.log('sql=>',sql);
    const result = await connection.query(sql);
    await connection.end();
    return result;
  } catch (error) {
    throw error;
  }
}
module.exports = {query};