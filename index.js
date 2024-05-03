import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const express = require('express');
const { Client } = require('@vercel/postgres');

const app = express();
const port = process.env.PORT || 3000;

// Configuração da conexão com o banco de dados PostgreSQL
const client = new Client({
  connectionString: 'postgres://default:iYg3Zfn4GyoD@ep-delicate-thunder-a4g418u0-pooler.us-east-1.aws.neon.tech/verceldb',
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => console.log('Conexão com o banco de dados PostgreSQL estabelecida com sucesso!'))
  .catch(err => console.error('Erro ao conectar com o banco de dados PostgreSQL:', err));

app.use(express.json());

// Rota para lidar com o registro do formulário de vacinas
app.post('/api/vacina', async (req, res) => {
  const { nome, data, tipo } = req.body;

  try {
    const query = 'INSERT INTO vacinas (nome, data, tipo) VALUES ($1, $2, $3) RETURNING *';
    const values = [nome, data, tipo];
    const result = await client.query(query, values);

    const insertedVacina = result.rows[0];
    
    res.json(insertedVacina);
  } catch (err) {
    console.error('Erro ao inserir vacina', err);
    res.status(500).json({ error: 'Erro ao inserir vacina' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
