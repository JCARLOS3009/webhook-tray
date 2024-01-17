const product = {
    sku: '320',
    nome: 'Produto A',
    preco: 15.90
}

const queryString= Object.keys(product)
        .map(key =>`${encodeURIComponent(key)}=${encodeURIComponent(product[key])}`)
        .join('&');

console.log(queryString) 
