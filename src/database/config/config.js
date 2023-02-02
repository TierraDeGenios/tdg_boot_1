const dotenv = require('dotenv').config()

// Accede a las variables de entorno
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;


module.exports = {
  
  "development": {
    "username": dbUser,
    "password": dbPassword,
    "database": dbName,
    "host": dbHost,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "tdg_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "tdg_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}



// module.exports = {
//   "development": {
//     "username": "sql10592752",
//     "password": "mFmIk394la",
//     "database": "sql10592752",
//     "host": "sql10.freesqldatabase.com",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "sql10592752",
//     "password": "mFmIk394la",
//     "database": "sql10592752",
//     "host": "sql10.freesqldatabase.com",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "sql10592752",
//     "password": "mFmIk394la",
//     "database": "sql10592752",
//     "host": "sql10.freesqldatabase.com",
//     "dialect": "mysql"
//   }
// }
