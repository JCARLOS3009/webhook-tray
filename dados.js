const readline = require('readline');
const sqlite3 = require('sqlite3').verbose();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Conecta-se ao banco de dados (ou cria um novo se não existir)
const db = new sqlite3.Database('produtos.db');

// Função para solicitar inputs e inserir dados no banco de dados
function inserirDados(sku, nome, preco, estoque) {
  const sql = 'INSERT INTO dados (sku, nome, preco, estoque) VALUES (?, ?, ?, ?)';
  db.run(sql, [sku, nome, preco, estoque], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Dados inseridos com sucesso. ID: ${this.lastID}`);
    rl.close();
    // Fecha a conexão com o banco de dados quando terminar
    db.close();
  });
}

// Função para solicitar inputs
function solicitarInputs() {
  rl.question('Digite seu sku: ', (sku) => {
    rl.question('Digite seu nome: ', (nome) => {
      rl.question('Digite um preço: ', (preco) => {
        rl.question('Digite um estoque: ', (estoque) => {
          inserirDados(sku, nome, preco, estoque);
        });
      });
    });
  });
}

// Chama a função para solicitar inputs
solicitarInputs();
