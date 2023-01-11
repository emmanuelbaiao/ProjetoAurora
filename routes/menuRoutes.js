const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/MenuController');
const checarFuncionario = require('../helpers/auth').checarFuncionario;
const checarAssociado = require('../helpers/auth').checarAssociado;

router.get('/funcionario/:id', checarFuncionario, MenuController.renderizarMenuFuncionario);
router.get('/associado/:id', checarAssociado, MenuController.renderizarMenuAssociado);
router.get('/associado/:id/conta', checarAssociado, MenuController.visualizarConta);
router.get('/associado/:id/edit', checarAssociado, MenuController.editarConta);
router.get('/funcionario/:id/visualizar', checarFuncionario, MenuController.visualizarAssociados)
router.get('/funcionario/:id/editar/:idAssociado', checarFuncionario, MenuController.editarAssociado);
router.post('/funcionario/aprovar/func=:idFunc&user=:idUsuario', checarFuncionario, MenuController.aprovarAssociado);
router.get('/funcionario/historico/func=:idFunc&user=:idUsuario', checarFuncionario, MenuController.visualizarHistorico);


router.get('/funcionario/:id', MenuController.renderizarMenuFuncionario);
router.get('/associado/:id', MenuController.renderizarMenuAssociado);
router.get('/associado/:id/conta', MenuController.visualizarConta);
router.get('/associado/:id/edit', MenuController.editarConta);
router.get('/funcionario/:id/visualizar', MenuController.visualizarAssociados)
router.get('/funcionario/:id/editar/:idAssociado', MenuController.editarAssociado);
router.post('/funcionario/aprovar/func=:idFunc&user=:idUsuario', MenuController.aprovarAssociado);
router.get('/funcionario/historico/func=:idFunc&user=:idUsuario', MenuController.visualizarHistorico)
router.get('/funcionario/:id/reservas', MenuController.visualizarReservasFuncionario);
router.get('/associado/:id/reservas', MenuController.visualizarReservasAssociado);

// filtrar campo de busca - Associado
router.get('/funcionario/:id/visualizar/buscar', checarFuncionario, MenuController.filtrarReservaBuscaAssociado)




module.exports = router;