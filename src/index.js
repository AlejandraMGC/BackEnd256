const express = require('express');
const conectarBD = require('../config//db');
const cors = require('cors');
const router = require('../routes/rutasCliente');
const routers = require('../routes/rutasProducto');


//creamos la variable app
const app = express();
const port = process.env.PORT || 5000;

// conexion bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

// ruta para consumir la api cliente
app.use('/api/clientes', require('../routes/rutasCliente'));

// ruta para consumir la api producto
app.use('/api/productos', require('../routes/rutasProducto'));


// ruta para verificar nuestro servidor en la web
app.get('/', (req, res) =>{
    res.send("hola estamos conectados desde la web")
});


// ruta de nuestro servidor local
app.listen(port, () =>{
    console.log("El servidor esta conectado http://localhost:5000")
});