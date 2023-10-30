const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'produtos' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'produtoDestaque' });
});

app.get('/produto1', (req, res) => {
  res.render('produto1', { message: 'sobre1' });
});

app.get('/produto2', (req, res) => {
  res.render('produto2', { message: 'sobre2' });
});

app.get('/produto3', (req, res) => {
  res.render('produto3', { message: 'sobr3' });
});

app.get('/sobrenos', (req, res) => {
  res.render('sobrenos', { message: 'sobre nós' });
});

app.get('/contato', (req, res) => {
  res.render('contato', { message: 'contato' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
