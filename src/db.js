const sqlite3 = require('sqlite3').verbose();

// Conecta-se ao banco de dados (ou cria um novo se não existir)
const db = new sqlite3.Database('produtos.db');

// Cria uma tabela para armazenar os dados
db.run(`CREATE TABLE IF NOT EXISTS dados (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sku INTEGER,
  nome TEXT,
  preco REAL,
  estoque INTEGER
)`);

// Função para inserir dados na tabela
function inserirDados(sku, nome, preco, estoque) {
  const sql = 'INSERT INTO dados (sku, nome, preco, estoque) VALUES (?, ?, ?, ?)';
  db.run(sql, [sku, nome, preco, estoque], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Dados inseridos com sucesso. ID: ${this.lastID}`);
  });
}

// Exemplo de chamada da função
inserirDados(300,'Produto A', 9.50, 25);

// Fecha a conexão com o banco de dados quando terminar
db.close();
