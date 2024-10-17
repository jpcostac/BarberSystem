const servicoService = require('../services/ServicoService')

module.exports = {
    createServico: async(request, response)=> {
        json= {error: "", result: ""};
        let nome= request.body.nome;
        let descricao = request.body.descricao;
        let preco = request.body.preco;

        if(nome!= "" && descricao!= "" && preco!= ""){
            await servicoService.createServico(
                nome, descricao, preco
            );

            json.result= `Serviço: ${nome} cadastrado com sucesso`;
            response.status(201).json(json);
        }else{
            json.error= "Falha ao cadastrar serviço";
            response.status(400).json(json);
        }
    },

    showServicos: async (request, response) => {
        json = { error: "", result: [] };
        let servicos = await servicoService.showServicos(); // Alterado para buscar todos os serviços
    
        if (servicos.length == 0) {
            json.result = "Nenhum serviço cadastrado" // Retorna todos os serviços encontrados
            response.status(200).json(json);
        } else {
            for(let servico of servicos){
                json.result.push(servico);
            }
                response.status(200).json(json);
        }
        
    },

    updateServico: async (request, response) => {
        json = { error: "", result: "" };
        const id = request.params.id;
        
        let nome = request.body.nome
        let descricao= request.body.descricao
        let preco= request.body.preco
    
        if(nome!="" && descricao!= "" && preco!= ""){
            await servicoService.updateServico(
                nome, descricao, preco
            );
            
            json.result = `Serviço com ID: ${id} atualizado com sucesso.`;
            response.status(200).json(json);
        }else{
            json.error = "Erro ao atualizar serviço.";
            response.status(400).json(json);
        }
    },
    
    deleteServico: async (request, response) => {
        json = { error: "", result: "" };
        const id = request.params.id;
    
        if(id){
            await servicoService.deleteServico(id);
            json.result = `Serviço com ID: ${id} deletado com sucesso.`;
            response.status(200).json(json);
        } 
    }
}