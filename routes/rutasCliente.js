const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');


// rutas de crud
router.post('/', clienteController.agregarClientes);/*para ingresar clientes*/ 
router.get('/', clienteController.buscarClientes);/*para mostrar todos los clientes*/
router.get('/:id', clienteController.mostrarCliente);/*para mostrar un cliente en especifico*/
//router.patch('/:id', clienteController.modificarClientes);/*para modificar un cliente en especifico o mas*/
router.put('/:id', clienteController.actualizarClientes);/*para modificar un cliente en especifico o mas*/
router.delete('/:id', clienteController.eliminarClientes);/*para eliminar un cliente en especifico o mas*/


module.exports = router;

