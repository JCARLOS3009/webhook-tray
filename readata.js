const sqlite3 = require('sqlite3').verbose();

// Conecta-se ao banco de dados
const db = new sqlite3.Database('produtos.db');

// Consulta SELECT para obter todos os dados da tabela
const sql = 'SELECT * FROM dados';

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }

  // Processa os resultados
  rows.forEach((row) => {
    console.log(`ID: ${row.id}, Nome: ${row.nome}, Preço: ${row.preco}, Estoque: ${row.estoque}`);
  });
});

// Fecha a conexão com o banco de dados quando terminar
db.close();
