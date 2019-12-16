const Carrinho = require('./Carrinho');

let button = document.querySelector('#submit');

button.addEventListener('click', (e) => {

    e.preventDefault;

    let name = document.querySelector('#name');
    let code = document.querySelector('#code');

    Carrinho.addNewProduct(name, code);
})