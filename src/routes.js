const express = require('express')
const route = express.Router()
const cors = require('cors')
const ClienteController = require('./controllers/ClienteController');
const BarbeiroController = require('./controllers/BarbeiroController');
const AgendamentoController = require('./controllers/AgendamentoController');
const AtendenteController = require('./controllers/AtendenteController');
const ServicoController = require('./controllers/ServicoController');



//endPoints clientes
route.get('/cliente', ClienteController.showClientes);
route.post('/cliente', ClienteController.createCliente);
route.update('/cliente/:id', ClienteController.updateCliente);

//endPoints barbeiros
route.get('/barbeiro', BarbeiroController.showBarbeiro);
route.post('/barbeiro', BarbeiroController.createBarbeiro);
route.update('/barbeiro/:id', BarbeiroController.updateBarbeiro);
route.delete('/barbeiro/:id', BarbeiroController.deleteBarbeiro);

//endPoints agendamentos
route.get('/agendamento', AgendamentoController.showAgendamentos);
route.post('/agendamento', AgendamentoController.createAgendamento);
route.update('/agendamento/:id', AgendamentoController.updateAgendamento);
route.delete('/agendamento/:id', AgendamentoController.deleteAgendamento);

//endPoints atendentes
route.get('/atendente', AtendenteController.showAtendentes);
route.post('/atendente', AtendenteController.createAtendente);
route.update('/atendente/:id', AtendenteController.updateAtendente);
route.delete('/atendente/:id', AtendenteController.deleteAtendente);

//endPoints serciços
route.get('/servicos', ServicoController.showServicos);
route.post('/servicos', ServicoController.createServico);
route.update('/servicos/:id', ServicoController.updateServico);
route.delete('/servicos/:id', ServicoController.deleteServico);


module.exports = route