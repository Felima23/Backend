const mysql = require('mysql2');
require('dotenv').config(); // Certifique-se de instalar o dotenv com `C`


const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,       // Seu usuário do MySQL
    password: process.env.MYSQLPASSWORD,     // Sua senha do MySQL
    database: process.env.MYSQL_DATABASE       // Nome do banco de dados que você criou
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = db;
