const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:2, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:3, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:4, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:5, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:6, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:7, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:8, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:9, nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
  {id:10,nome:"Camisa Corinthians I 23/24 s/n° Torcedor Nike Masculina - Branco", preco:"399,99", descricao:"Celebre os 40 anos de um movimento que ajudou a moldar a trajetória política do Brasil"},
]

function buscarProdutoPorId(id) {
  const produto = produtos.find(produtos => produto.id == id);
      return produto || null 
}   

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
