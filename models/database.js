const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'root', 'Leticia2012@', {
    dialect: 'mysql',
    operatorAliases: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
}
