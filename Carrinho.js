
        let carrinho = [ {
            name: 'teste',
            code: '100'

        }];
    function getCarrinho(){

        return carrinho;
    }

    function addNewProduct(name, code){
        let product = {
            name,
            code
        }

        carrinho.push(product);
        return product;
        

    }

module.exports.getCarrinho = getCarrinho;
module.exports.addNewProduct = addNewProduct;