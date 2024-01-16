const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

//criar rota padrão
app.get('/', (req, res) => {
    res.send('Sistema para Controle de Estoque e Catálogo de Produtos')
})

app.use(bodyParser.json());

app.post('/req', (req, res) => {
    const apiUrl = 'http://localhost:3000/webhook';
    const dadosParaEnviar = req.body; // Assume que os dados são enviados no corpo da requisição POST
  
    axios.post(apiUrl, dadosParaEnviar)
      .then(response => {
        res.json({ success: true, data: response.data });
      })
      .catch(error => {
        console.error('Erro na requisição POST:', error.message);
        res.status(500).json({ success: false, error: 'Erro na requisição POST' });
      });
  });
// Rota para renderizar a página com os dados recebidos

// Rota para exibir os parâmetros da URL em formato JSON
app.get('/getproduct', (req, res) => {
  const skuParam = req.query.sku;
  const nomeParam = req.query.nome;
  const precoParam = req.query.preco;
  const estoqueParam = req.query.estoque;

  const jsonResponse = {
    sku: skuParam,
    nome: nomeParam, 
    preco: precoParam,
    estoque: estoqueParam,
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
