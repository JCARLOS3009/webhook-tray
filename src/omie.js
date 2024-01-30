const axios = require('axios');

const omieApiEndpoint = 'https://app.omie.com.br/api/v1/geral/produtos/';
const omieAppKey = '*********';
const omieAppSecret = '**********************';

const requestData = {
  call: 'ListarProdutos',
  app_key: omieAppKey,
  app_secret: omieAppSecret,
  param: [
    {
      pagina: 1,
      registrosPorPagina: 10, // Corrected parameter name
      apenas_importado_api: 'N',
      filtrar_apenas_omiepdv: 'N',
    },
  ],
};

axios.post(omieApiEndpoint, requestData, {
  headers: { 
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
