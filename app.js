import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('API de Tarefas está funcionando!');
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});