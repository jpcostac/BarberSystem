const database = require('../database');

module.exports = {
    // Criar um novo atendente
    createAtendente: (nome, telefone, email) => {
        return new Promise((resolve, reject) => {
            database.query(
                `INSERT INTO atendente (nome, telefone, email) VALUES (?,?,?)`,
                [nome, telefone, email],
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

    // Exibir um atendente por ID
    showAtendente: () => {
        return new Promise((resolve, reject) => {
            database.query(
                `SELECT id, nome, telefone, email FROM atendente`,
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

    // Atualizar um atendente
    updateAtendente: (id, nome, telefone, email) => {
        return new Promise((resolve, reject) => {
            database.query(
                `UPDATE atendente SET nome = ?, telefone = ?, email = ? WHERE id = ?`,
                [nome, telefone, email, id],
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

    // Deletar um atendente
    deleteAtendente: (id) => {
        return new Promise((resolve, reject) => {
            database.query(
                `DELETE FROM atendente WHERE id = ?`,
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