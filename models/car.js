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
    return Car;
}

module.exports = car;