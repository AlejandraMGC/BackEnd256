const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({

    nombreprod:{
        type: String,
        required: true
    },

    costo:{
        type: Number,
        required: true
    },

    precio:{
        type: Number,
        required: true
    },

    cantidad:{
        type: Number,
        required: true
    },


},{versionkey:false});

module.exports = mongoose.model('Producto', productoSchema);