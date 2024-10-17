const { json } = require('express')
const barbeiroService = require('../services/BarbeiroService')

module.exports={
    createBarbeiro: async(request, response)=> {
        json= {error: "", result: ""};
        let nome = request.body.nome;
        let telefone = request.body.telefone;
        let email = request.body.email;
        let especialidade = request.body.especialidade;
        let data_contratacao = request.body.data_contratacao;

        if(nome!= "" && telefone!= "" && email!= "" && especialidade!= "" && data_contratacao!= ""){
            await barbeiroService.createBarbeiro(
                nome, telefone, email, especialidade, data_contratacao
            );

            json.result= `Barbeiro ${nome} cadastrado com sucesso`
            response.status(201).json(json);
        }else{
            json.error= "Falha ao criar o barbeiro, campos inválidos"
            response.status(400).json(json)
        }
    },

    showBarbeiro: async(request, response)=> {
        json= {error: "", result: []};
        let barbeiros = await barbeiroService.showBarbeiro()

        if(barbeiros.lenght == 0){
            json.result = "Nenhum barbeiro cadastrado";
            response.status(200).json(json);
        }else{
            for(let barbeiro of barbeiros){
                json.result.push(barbeiro);
            }
            response.status(200).json(json);
        }
        
    },

    updateBarbeiro: async(request, response)=> {
        json= {error: "", result: ""};
        const id = request.params.id;

        let nome = request.body.nome;
        let telefone = request.body.telefone;
        let email = request.body.email;
        let especialidade = request.body.especialidade;

        if(nome!= "" && telefone!= "" && email!= "" && especialidade!= ""){
            await barbeiroService.updateBarbeiro(
                nome, telefone, email, especialidade
            );

            json.result= `Barbeiro ${nome} editado com sucesso`
            response.status(201).json(json);
        }else{
            json.error= "Falha ao criar o barbeiro, campos inválidos"
            response.status(400).json(json)
        }
    },

    deleteBarbeiro: async(request, response)=> {
        json= {error: "", result: ""};
        let id = request.params.id;

        if(id){
            await barbeiroService.deleteBarbeiro(id)

            json.result= `Turma excluída com sucesso`;
            response.status(200).json(json);
        }
    }
}