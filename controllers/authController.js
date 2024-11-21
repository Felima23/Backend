const db = require('../config');

// Função para registrar o usuário
const registerUser = (req, res) => {
    const { NOME, SOBRENOME, CELULAR, EMAIL, SENHA, GENERO, ENDERECO } = req.body;
    const query = `
        INSERT INTO usuarios (NOME, SOBRENOME, CELULAR, EMAIL, SENHA, GENERO, ENDERECO) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    console.log("Dados recebidos:", { NOME, SOBRENOME, CELULAR, EMAIL, SENHA, GENERO, ENDERECO });

    db.query(query, [ NOME, SOBRENOME, CELULAR, EMAIL, SENHA, GENERO, ENDERECO], (err) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'Usuário já cadastrado' });
            }
            return res.status(500).json({ message: 'Erro no cadastro' });
        }
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
};

// Função para login do usuário
const loginUser = (req, res) => {
    const { EMAIL, SENHA } = req.body;

    const query = 'SELECT * FROM usuarios WHERE EMAIL = ? AND SENHA = ?';
    db.query(query, [EMAIL, SENHA], (err, results) => {
        if (err) return res.status(500).json({ message: 'Erro no login' });
        if (results.length === 0) return res.status(400).json({ message: 'Email ou senha incorretos' });

        res.status(200).json({ message: 'Login bem-sucedido' });
    });
};

module.exports = { registerUser, loginUser };