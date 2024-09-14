module.exports = () => {
    const controller = {};
    let clientes = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(clientes);
    };

    controller.buscarPorId = (req, res) => {               
        res.status(200).json(clientes.filter(cliente => cliente.id == req.param("id"))[0]);
    };

    controller.salvar = (req, res) => {    
        const cliente = req.body;           
        if (cliente.id) {
            clienteExistente = clientes.filter(c => c.id == cliente.id)[0];
            clienteExistente.nome = cliente.nome;
            clienteExistente.email = cliente.email;

            res.status(200).json(cliente);
        } else {
            clientes.push(cliente);
            cliente.id = clientes.length;
            res.status(201).json(cliente);
        }                    
    };

    controller.excluir = (req, res) => {     
        let id = req.param("id");

        console.log(id);
        console.log(clientes);

        clientes = clientes.filter(cliente => cliente.id != id);

        console.log(clientes);
        res.status(200).json({});
    };
    
    return controller;
}
