const database = require('../database')

module.exports={
    //Criando agendamento
    createAgendamento: (cliente_id, barbeiro_id, servico_id, data_horario, observacoes) => {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO agendamentos (cliente_id, barbeiro_id, servico_id, data_horario, observacoes) VALUES (?,?,?,?,?)`,
                [cliente_id, barbeiro_id, servico_id, data_horario, observacoes],
                (err, result) => {
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(result);
                }
            
            )
        })
    },

    //Mostrando agendamentos
    //Primeiro terei que pensar como será no front para mostrar os agendamentos
    //Pois tenho que primeiro selecionar o Barbeiro
    showAgendamento: () =>{

    },

    //Editando um agendamento
    updateAgendamento: (id, cliente_id, barbeiro_id, servico_id, data_horario, observacoes) => {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE agendamentos SET cliente_id = ?, barbeiro_id = ?, servico_id = ?, data_horario = ?, observacoes = ? WHERE id = ?`,
                [cliente_id, barbeiro_id, servico_id, data_horario, observacoes, id],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                }
            );
        });
    },

    //Deletando agendamento
    //Também so posso deletar um agendamento quando esse agendamento existir
    deleteAgendamento: (agendamento_id) => {
        return new Promise((resolve, reject) => {
            database.query(
                `DELETE FROM agendamentos WHERE id = ?`,
                [agendamento_id],
                (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                }
            );
        });
    }
    
}