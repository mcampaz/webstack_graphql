const resolvers = {
    Query: {
        cars: (parent, args, { models }) => models.cars,
        car: (parent, {id}, { models }) => {
            const car = models.cars.filter(car => car.id === id);
            return car[0];
        },
        my_car: () => models.cars[0]
    },
    Mutation: {
        addCar: (parent, {id, color, make, owner=[]}, { models }) => {
            let car = {
                id,
                color,
                make
            };
            models.cars.push(car);
            return car;
        },
        removeCar: (parent, {id}, { models }) => {
            let found = false;
            models.cars = models.cars.filter(car => {
                if (car.id === id) {
                    found = true;
                } else {
                    return car;
                }
            });
            return found;
        }
    },
    Car: {
        owner: (parent, args, { models }) => {
            return models.users.find(user => user.id === parent.ownedBy);
        }
    }
};

module.exports = resolvers;