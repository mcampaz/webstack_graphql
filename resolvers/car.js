const resolvers = {
    Query: {
        cars: (parent, args, { models }) => {
            return models.Car.findAll();
        },
        car: (parent, {id}, { models }) => {
            return models.Car.findByPk(id)
        },
        //my_car: () => models.cars[0]
    },
    Mutation: {
        addCar: (parent, {color, make, model}, { models }) => {
            let car = {
                color,
                make,
                model
            };
            return models.Car.create(car);
        },
        removeCar: (parent, {id}, { models }) => {
            return models.Car.destroy({
                where: {
                    id
                }
            });
        }
    },
    Car: {
        owner: (parent, args, { models }) => {
            return models.User.findAll({
                where: {
                    id: parent.userId
                }

            })
        }
    }
};

module.exports = resolvers;