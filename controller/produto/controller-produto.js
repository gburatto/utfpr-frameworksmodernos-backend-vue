module.exports = () => {
    const controller = {};
    let produtos = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(produtos);
    };

    controller.buscarPorId = (req, res) => {               
        res.status(200).json(produtos.filter(produto => produto.id == req.param("id"))[0]);
    };

    controller.salvar = (req, res) => {    
        const produto = req.body;           
        if (produto.id) {
            produtoExistente = produtos.filter(p => p.id == produto.id)[0];
            produtoExistente.nome = produto.nome;
            produtoExistente.descricao = produto.descricao;
            produtoExistente.preco = produto.preco;

            res.status(200).json(produto);
        } else {
            produtos.push(produto);
            produto.id = produtos.length;
            res.status(201).json(produto);
        }                    
    };

    controller.excluir = (req, res) => {     
        let id = req.param("id");

        console.log(id);
        console.log(produtos);

        produtos = produtos.filter(produto => produto.id != id);

        console.log(produtos);
        res.status(200).json({});
    };
    
    return controller;
}
