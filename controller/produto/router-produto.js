const produtos = require('express').Router();

const controlerProduto = require('./controller-produto')();

produtos.get('/', controlerProduto.listar);
produtos.get('/:id', controlerProduto.buscarPorId);
produtos.post('/', controlerProduto.salvar);
produtos.delete('/:id', controlerProduto.excluir);

module.exports = produtos;
