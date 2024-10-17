const express = require('express')
const route = express.Router()
const cors = require('cors')
const ClienteController = require('./controllers/ClienteController');
const BarbeiroController = require('./controllers/BarbeiroController');



//endPoints clientes
route.get('/cliente', ClienteController.showClientes);
route.post('/cliente', ClienteController.createCliente);
route.update('/cliente/:id', ClienteController.updateCliente);

//endPoints barbeiros
route.get('/barbeiro', BarbeiroController.showBarbeiro);
route.post('/barbeiro', BarbeiroController.createBarbeiro);
route.update('/barbeiro/:id', BarbeiroController.updateBarbeiro);
route.delete('/barbeiro/:id', BarbeiroController.deleteBarbeiro);


module.exports = route