const car = (sequelize, DataTypes) => {
    const Car = sequelize.define('car', {
        model: {
            type: DataTypes.STRING
        },
        make: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        }
    });

    Car.associate = models => {
        Car.belongsTo(models.User);
    };

    return Car;
};

module.exports = car;