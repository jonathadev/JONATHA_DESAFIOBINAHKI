const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    empresa: {
        type: db.Sequelize.STRING
    },
    questao: {
        type: db.Sequelize.STRING
    },
    areatexto: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//Pagamento.sync({force: true})

module.exports = Pagamento