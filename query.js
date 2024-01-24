const axios = require('axios');

const url = 'https://bling.com.br/Api/v2/produto/json/';
const estoque = 100;
const nome = "Shampoo Wella";
const preco = 60.56;

const xml = `
<produto>
   <descricao>${nome}</descricao>
   <situacao>Ativo</situacao>
   <descricaoCurta>Descrição curta da caneta</descricaoCurta>
   <descricaoComplementar>Descrição complementar da caneta</descricaoComplementar>
   <un>Pc</un>
   <vlr_unit>1.68</vlr_unit>
   <preco_custo>${preco}</preco_custo>
   <peso_bruto>0.2</peso_bruto>
   <peso_liq>0.18</peso_liq>
   <class_fiscal>1000.01.01</class_fiscal>
   <marca>Marca da Caneta</marca>
   <origem>0</origem>
   <gtin>223435780</gtin>
   <gtinEmbalagem>54546</gtinEmbalagem>
   <largura>11</largura>
   <altura>21</altura>
   <profundidade>31</profundidade>
   <estoque>${estoque}</estoque>
   <estoqueMaximo>100.00</estoqueMaximo>
   <cest>28.040.00</cest>
   <idGrupoProduto>12345</idGrupoProduto>
   <condicao>Novo</condicao>
   <freteGratis>N</freteGratis>
   <linkExterno>https://minhaloja.com.br/meu-produto</linkExterno>
   <observacoes>Observações do meu produtos</observacoes>
   <producao>P</producao>
   <descricaoFornecedor>Descrição do fornecedor</descricaoFornecedor>
   <idFabricante>0</idFabricante>
   <codigoFabricante>123</codigoFabricante>
   <unidadeMedida>Centímetros</unidadeMedida>
   <garantia>4</garantia>
   <itensPorCaixa>2</itensPorCaixa>
   <volumes>2</volumes>
   <urlVideo>https://www.youtube.com/watch?v=zKKL-SgC5lY</urlVideo>
   <imagens>
      <url>https://bling.com.br/bling.jpg</url>
      <url>https://bling.com.br/bling2.jpg</url>
   </imagens>
</produto>
`;

const apiKey = '[ sua_chave_API]';

// Construindo os dados a serem enviados na solicitação POST
const data = new URLSearchParams({
  apikey: apiKey,
  xml: encodeURIComponent(xml),
});

// Realizando a solicitação POST usando o módulo axios
axios.post(url, data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao inserir produto:', error.response ? error.response.data : error.message);
  });
