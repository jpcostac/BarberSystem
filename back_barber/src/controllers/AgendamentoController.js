const agendamentoService = require('../services/agendamentoService');

module.exports = {
    // Criar um novo agendamento
    createAgendamento: async (request, response) => {
        const json = { error: "", result: "" };
        const { clienteId, barbeiroId, servicoId, dataHora } = request.body;

        if (clienteId && barbeiroId && servicoId && dataHora) {
            await agendamentoService.createAgendamento(clienteId, barbeiroId, servicoId, dataHora);
            json.result = `Agendamento para o cliente ID: ${clienteId} cadastrado com sucesso.`;
            response.status(201).json(json);
        } else {
            json.error = "Falha ao cadastrar agendamento. Todos os campos são obrigatórios.";
            response.status(400).json(json);
        }
    },

    // Exibir todos os agendamentos
    showAgendamentos: async (request, response) => {
        const json = { error: "", result: [] };
        let agendamentos = await agendamentoService.showAgendamentos(); // Busca todos os agendamentos

        if (agendamentos.length === 0) {
            json.result = "Nenhum agendamento cadastrado."; // Retorna mensagem se não houver agendamentos
            response.status(200).json(json);
        } else {
            for (let agendamento of agendamentos) {
                json.result.push(agendamento); // Adiciona cada agendamento ao resultado
            }
            response.status(200).json(json);
        }
    },

    // Atualizar um agendamento
    updateAgendamento: async (request, response) => {
        const json = { error: "", result: "" };
        const id = request.params.id;
        const { clienteId, barbeiroId, servicoId, dataHora } = request.body;

        if (clienteId && barbeiroId && servicoId && dataHora) {
            await agendamentoService.updateAgendamento(id, clienteId, barbeiroId, servicoId, dataHora);
            json.result = `Agendamento com ID: ${id} atualizado com sucesso.`;
            response.status(200).json(json);
        } else {
            json.error = "Erro ao atualizar agendamento. Todos os campos são obrigatórios.";
            response.status(400).json(json);
        }
    },

    // Deletar um agendamento
    deleteAgendamento: async (request, response) => {
        const json = { error: "", result: "" };
        const id = request.params.id;

        if (id) {
            await agendamentoService.deleteAgendamento(id);
            json.result = `Agendamento com ID: ${id} deletado com sucesso.`;
            response.status(200).json(json);
        } else {
            json.error = "Erro ao deletar agendamento. ID não fornecido.";
            response.status(400).json(json);
        }
    }
};
