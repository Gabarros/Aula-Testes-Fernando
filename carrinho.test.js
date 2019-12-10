const index = require('./index');
const Carrinho = require('./Carrinho');
test('should be an object list', () => {
    let list =  [ {
        nome: 'teste',
        codigo: '100'

    }];
    expect(Carrinho.create()).toEqual(list);

    
});