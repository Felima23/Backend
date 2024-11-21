const mysql = require('mysql2');
require('dotenv').config(); // Certifique-se de instalar o dotenv com `C`


const db = mysql.createConnection(process.env.MYSQL_PUBLIC_URL);

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = db;
