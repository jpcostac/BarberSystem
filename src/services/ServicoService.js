const database = require('../database');

module.exports = {
    // Criar um novo serviço
    createServico: (nome, descricao, preco) => {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO servicos (nome, descricao, preco) VALUES (?,?,?)`,
                [nome, descricao, preco],
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

    // Exibir os serviços
    showServico: () => {
        return new Promise((resolve, reject) => {
            database.query(
                `SELECT id, nome, descricao, preco FROM servicos`,
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

    // Atualizar um serviço
    updateServico: (id, nome, descricao, preco) => {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE servicos SET nome = ?, descricao = ?, preco = ? WHERE id = ?`,
                [nome, descricao, preco, id],
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

    // Deletar um serviço
    deleteServico: (id) => {
        return new Promise((resolve, reject) => {
            database.query(
                `DELETE FROM servicos WHERE id = ?`,
                [id],
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
};