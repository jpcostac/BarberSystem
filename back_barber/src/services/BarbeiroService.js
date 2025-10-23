//Iremos criar a interação com o banco de dados dos barbeiros
//Por enquanto apenas com um CRUD simples

const database = require('../database')

module.exports = {
    //Criar um barbeiro
    createBarbeiro:(nome, telefone, email, especialidade, data_contratacao) =>{
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO barbeiro (nome, telefone, email, especialidade, data_contratacao) VALUES (?,?,?,?,?)`,
                [nome, telefone, email, especialidade, data_contratacao],
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

    //Mostrar lista de barbeiros
    showBarbeiro:() => {
        return new Promise((resolve, reject) => {
            database.query(
                `SELECT id, nome, telefone, email, especialidade, data_contratacao FROM barbeiro`,
                (err, result)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(result);
                }
            )
        })
    },

    //Editar barbeiro
    updateBarbeiro:(id, nome, telefone, email, especialidade) => {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE barbeiro SET nome = ?, telefone = ?, email = ?, especialidade = ? WHERE id = ?`,
                [nome, telefone, email, especialidade],
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

    //Deletar um barbeiro quando o mesmo deixar a equipe
    deleteBarbeiro:(id) => {
        return new Promise((resolve, reject) => {
            database.query(
                `DELETE FROM barbeiro WHERE id = ${id}`,
                (err, result) => {
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(result);
                }
            )
        })
    }
}