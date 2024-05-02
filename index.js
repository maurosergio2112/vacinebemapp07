// index.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());

// Rota para lidar com o registro do formulário de vacinas
app.post('/api/vacina', async (req, res) => {
  const { nome, data, tipo } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO vacinas (nome, data, tipo) VALUES ($1, $2, $3) RETURNING *',
      [nome, data, tipo]
    );

    const insertedVacina = result.rows[0];
    client.release();
    
    res.json(insertedVacina);
  } catch (err) {
    console.error('Erro ao inserir vacina', err);
    res.status(500).json({ error: 'Erro ao inserir vacina' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
