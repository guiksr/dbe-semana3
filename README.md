# DBE – Semana 3: Catálogo de times com EJS

Atividade prática da disciplina Desenvolvimento Back-End (IFSul – TSIaD).

- **Aluno:** Guilherme Hennemann Kaiser
- **Polo:** Picada Café
- **Curso:** Tecnólogo em Sistemas para Internet EAD - IFSUL

## Como executar

```bash
npm install
npm start
```

Acesse:

- http://localhost:3000/ → página inicial com mensagem de boas-vindas
- http://localhost:3000/times → tabela com todos os times
- http://localhost:3000/times/1 → detalhes do time de ID 1 (`req.params`)
- http://localhost:3000/times/999 → mensagem de time não encontrado

## Estrutura

```
├── views/
│   ├── partials/
│   │   ├── cabecalho.ejs
│   │   └── rodape.ejs
│   ├── index.ejs
│   ├── times.ejs
│   ├── detalhe.ejs
│   └── nao-encontrado.ejs
├── index.js
└── package.json
```
