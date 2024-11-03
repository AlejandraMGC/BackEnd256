const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');


// rutas de crud
router.post('/', productoController.agregarProductos);/*para ingresar productos*/ 
router.get('/', productoController.buscarProductos);/*para mostrar todos los productos*/
router.get('/:id', productoController.mostrarProductos);/*para mostrar un producto en especifico*/
router.put('/:id', productoController.actualizarProductos);/*para modificar un producto en especifico o mas*/
router.delete('/:id', productoController.eliminarProductos);/*para eliminar un producto en especifico o mas*/


module.exports = router;

