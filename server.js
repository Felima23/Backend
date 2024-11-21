const express = require('express');
const dotenv = require('dotenv');
const db = require('./config'); // Importa a conexão com o banco de dados


dotenv.config();
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));