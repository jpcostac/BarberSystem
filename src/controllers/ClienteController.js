const { response, json } = require('express');
const clienteService = require('../services/ClienteService')

module.exports={
    createCliente: async(request, response)=> {
        json= {error: "", result: ""};
        let nome = request.body.nome;
        let telefone = request.body.telefone;
        let email = request.body.email;

        if(nome!="" && telefone!= "" && email!=""){
            let cliente = await clienteService.createCliente(
                nome, telefone, email
            );

            json.result= `Cliente ${nome} cadastrado com sucesso`
            response.status(201).json(json);
        }else{
            json.error= "Falha ao criar o cliente, credenciais inválidas";
            response.status(400).json(json);
        }
    },

    showClientes: async(request, response)=> {
        json= {error: "", result: []};
        let clientes = await clienteService.showCliente()

        if(clientes.length == 0){
            json.result = "Nenhum cliente cadastrado";
            response.status(200).json(json);
        }else{
            for(let cliente of clientes){
                json.result.push(cliente);
            }
            response.status(200).json(json);
        }
    },

    updateCliente: async(request, response) => {
        json= {error:"", result:""};
        const id = request.params.id;

        let nome = request.body.nome;
        let telefone = request.body.telefone;
        let email = request.body.email;

        if(nome!="" && telefone!="" && email!= ""){
            await clienteService.updateCliente(
                nome, telefone, email
            );
            json.result= `Cliente ${nome} editado com sucesso!`
            response.status(200).json(json);
        }else{
            json.error= "Falha ao editar os dados";
            response.status(400).json(json);
        }
    }
}