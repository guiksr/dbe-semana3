// Aluno: Guilherme Hennemann Kaiser
// Polo: Picada Café
// Curso: Tecnólogo em Sistemas para Internet EAD - IFSUL

import express from 'express';

const app = express();
const port = 3000;

// Configura o EJS como motor de views e a pasta dos templates
app.set('view engine', 'ejs');
app.set('views', './views');

const times = [
  { id: 1, nome: 'Grêmio', estadio: 'Arena do Grêmio', cidade: 'Porto Alegre' },
  { id: 2, nome: 'Internacional', estadio: 'Beira-Rio', cidade: 'Porto Alegre' },
  { id: 3, nome: 'Juventude', estadio: 'Alfredo Jaconi', cidade: 'Caxias do Sul' },
  { id: 4, nome: 'Caxias', estadio: 'Centenário', cidade: 'Caxias do Sul' },
  { id: 5, nome: 'Ypiranga', estadio: 'Colosso da Lagoa', cidade: 'Erechim' },
];

app.get('/', (req, res) => {
  res.render('index', {
    mensagem: 'Bem-vindo ao catálogo de times do futebol gaúcho!',
  });
});

app.get('/times', (req, res) => {
  res.render('times', { times });
});

app.get('/times/:id', (req, res) => {
  // Os parâmetros da URL chegam como texto, por isso a conversão para número
  const id = Number(req.params.id);
  const time = times.find((t) => t.id === id);

  if (!time) {
    return res.status(404).render('nao-encontrado', { id: req.params.id });
  }

  res.render('detalhe', { time });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
