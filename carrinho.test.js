const index = require('./index');
const Carrinho = require('./Carrinho');
test('should be an object list', () => {
    let list =  [ {
        name: 'teste',
        code: '100'

    }];
    expect(Carrinho.getCarrinho()).toEqual(list);

    
});

test('should add a new product', () => {
    let product = {
        name: 'teste',
        code: '100'
    }

    expect(Carrinho.addNewProduct()).toEqual(product);
    
});