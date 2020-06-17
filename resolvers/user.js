const resolvers = {
    Query: {
        users: (parent, args, { models }) => models.users,
        user: (parent, {id}, { models }) => {
            const user = models.users.filter(user => user.id === id);
            return user[0];
        },
        me: () => models.users[0]
    },
    Mutation: {
        makeUser: (parent, {id, name}, { models }) => {
            let user = {
                id,
                name
            };
            models.users.push(user);
            return user;
        },
        removeUser: (parent, {id}, { models }) => {
            let found = false;
            models.users = models.users.filter(user => {
                if (user.id === id) {
                    found = true;
                } else {
                    return user;
                }
            });
            return found;
        }
    },
    User: {
        carsOwned: (parent, args, { models }) => {
            return parent.cars_owned.map(id => models.cars.find(car => car.id === id));
        }
    }
};

module.exports = resolvers;







