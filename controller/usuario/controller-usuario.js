module.exports = () => {
    const controller = {};
    const usuarios = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(usuarios);
    };

    controller.salvar = (req, res) => {    
        const usuario = req.body;
        if (usuario.nome == null || usuario.nome == '') {
            res.status(400).json({erro: 'Nome é obrigatório'});
            return;
        }

        if (usuario.email == null || usuario.email == '') {
            res.status(400).json({erro: 'Email é obrigatório'});
            return;
        }

        usuarios.push(usuario)        
        res.status(201).json(usuario);
    };

    controller.excluir = (req, res) => {        
        const usuario = req.body;
        usuarios.pop(usuario)        
        res.status(200).json(usuario);
    };
    
    return controller;
}
