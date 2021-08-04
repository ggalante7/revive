const mysql = require('mysql2/promise');

async function connect(host, user, password, database) {
    return await mysql.createConnection({
        host,
        user,
        password,
        database
      });
}

module.exports = {
    connect
}