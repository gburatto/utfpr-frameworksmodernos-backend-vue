const clientes = require('express').Router();

const controlerCliente = require('./controller-cliente')();

clientes.get('/', controlerCliente.listar);
clientes.get('/:id', controlerCliente.buscarPorId);
clientes.post('/', controlerCliente.salvar);
clientes.delete('/:id', controlerCliente.excluir);

module.exports = clientes;
