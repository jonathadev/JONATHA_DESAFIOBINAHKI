const Sequelize = require("sequelize")

const sequelize = new Sequelize('celke', 'root', '7z^DbF_r!6Wv[`d+',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}