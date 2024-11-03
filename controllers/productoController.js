const Producto = require('../models/Producto');

// funcion agregar producto

exports.agregarProductos = async (req, res) => {
    try {
        let productos;
        productos = new Producto(req.body); // Crear una nueva instancia del producto con los datos del cuerpo de la solicitud
        await productos.save();// Guardar el producto en la base de datos
        res.json(productos);// Enviar el producto guardado como respuesta en formato JSON

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un producto');
    }
}

// funcion buscar producto
exports.buscarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
        console.log(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar un producto');
    }
}

// funcion buscar un producto en especifico
exports.mostrarProductos = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).send({ msg: "producto no encontrado con ese ID" })
        } else {
            res.json(productos);
        }

    } catch (error) {
        res.status(500).send('hubo un error al mostrar un producto');
    }
}

exports.actualizarProductos = async (req, res) => {
    try {
        const productos = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true} );
        if (!productos) {
            res.status(404).send({ msg: "producto no encontrado con ese ID" })
        } else {
             res.json(productos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar un producto');
    }
}

exports.eliminarProductos = async (req, res) => {
    try {
        const productos = await Producto.findById(req.params.id)
        if (!productos) {
            res.status(404).send({ msg: "producto no encontrado con ese ID" })
        } else {
             await Producto.findOneAndDelete({_id: req.params.id});
             res.json({msg : "producto eliminado"})
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar un producto');
    }
}
