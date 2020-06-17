const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'root', 'root', {
    dialect: 'mysql',
    operatorAliases: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
};
