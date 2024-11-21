const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Seu usuário do MySQL
    password: '',     // Sua senha do MySQL
    database: 'ecomaterialize'       // Nome do banco de dados que você criou
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = db;
