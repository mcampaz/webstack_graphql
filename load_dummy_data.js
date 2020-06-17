const { sequelize } = require('./models/database');
const models = require('./models');

const createData = async() => {
    await models.User.create({
        name: 'Tamas',
        cars: [{
            make: 'Mercedes',
            model: 'A250',
            color: 'black'
        }]
    }, {
        include: [models.Car]
    });

    await models.User.create({
        name: 'Steven',
        cars: [{
            make: 'Fiat',
            model: '500',
            color: 'yellow'
        }]
    }, {
        include: [models.Car]
    });

    await models.User.create({
        name: 'Pedro',
        cars: [{
                make: 'Mercury',
                model: '7000',
                color: 'red'
            },
            {
                make: 'Renault',
                model: '9000',
                color: 'green'
            }]
    }, {
        include: [models.Car]
    });
};

sequelize.sync().then(async() => {
    try{
        await createData();
        process.exit();
    } catch(error){
        console.error(error);
    }
});