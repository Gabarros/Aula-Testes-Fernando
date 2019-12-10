const Carrinho = require('./Carrinho');
test('should be an object list', () => {
    let list =  [ {
        name: 'teste',
        code: '100'

    }];
    expect(Carrinho.getCarrinho()).toEqual(list);
    
});

test('should return a new product', () => {
    let product = {
        name: 'teste',
        code: 100
    }

    expect(Carrinho.addNewProduct('teste', 100)).toEqual(product);
    
});

// test('should delete a product from the cart', () => {

//     expect(Carrinho.deleteProduct(code)).toReturn
    
// });