const atendenteService = require('../services/atendenteService');

module.exports = {
    // Criar um novo atendente
    createAtendente: async (request, response) => {
        const json = { error: "", result: "" };
        const { nome, telefone, email } = request.body;

        if (nome && telefone && email) {
            await atendenteService.createAtendente(nome, telefone, email);
            json.result = `Atendente: ${nome} cadastrado com sucesso.`;
            response.status(201).json(json);
        } else {
            json.error = "Falha ao cadastrar atendente. Todos os campos são obrigatórios.";
            response.status(400).json(json);
        }
    },

    // Exibir todos os atendentes
    showAtendentes: async (request, response) => {
        const json = { error: "", result: [] };
        let atendentes = await atendenteService.showAtendentes(); // Busca todos os atendentes

        if (atendentes.length === 0) {
            json.result = "Nenhum atendente cadastrado."; // Retorna mensagem se não houver atendentes
            response.status(200).json(json);
        } else {
            for (let atendente of atendentes) {
                json.result.push(atendente); // Adiciona cada atendente ao resultado
            }
            response.status(200).json(json);
        }
    },

    // Atualizar um atendente
    updateAtendente: async (request, response) => {
        const json = { error: "", result: "" };
        const id = request.params.id;
        const { nome, telefone, email } = request.body;

        if (nome && telefone && email) {
            await atendenteService.updateAtendente(id, nome, telefone, email);
            json.result = `Atendente com ID: ${id} atualizado com sucesso.`;
            response.status(200).json(json);
        } else {
            json.error = "Erro ao atualizar atendente. Todos os campos são obrigatórios.";
            response.status(400).json(json);
        }
    },

    // Deletar um atendente
    deleteAtendente: async (request, response) => {
        const json = { error: "", result: "" };
        const id = request.params.id;

        if (id) {
            await atendenteService.deleteAtendente(id);
            json.result = `Atendente com ID: ${id} deletado com sucesso.`;
            response.status(200).json(json);
        } else {
            json.error = "Erro ao deletar atendente. ID não fornecido.";
            response.status(400).json(json);
        }
    }
};
