//Cliente Service
//Aqui começaremos a criar o CRUD do cliente. 
//Não será possível deletar clientes, apenas criar, ver e editar os dados deles

const database = require('../database');

module.exports = {
    //Criar um cliente
    createCliente:(nome, telefone, email) => {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO clientes (nome, telefone, email) VALUES (?,?,?)`, [nome, telefone, email],
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

    showCliente:()=>{
        return new Promise((resolve, reject) => {
            database.query(
                `SELECT id, nome, telefone, email FROM clientes`,
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

    updateCliente:(id, nome, telefone, email) => {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE clientes SET nome = ?, telefone = ?, email = ? WHERE id = ?`, 
                [nome, telefone, email, id],
                (err, result)=> {
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