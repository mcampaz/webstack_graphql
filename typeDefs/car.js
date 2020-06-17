const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        cars: [Car]
        car(id: ID!): Car
        my_car: Car
    }
    extend type Mutation{
        addCar(id: ID!, color: String!, make: String): Car!
        removeCar(id: ID!): Boolean
    }
    type Car {
        id: ID!
        color: String!
        make: String
        owner: User!
    }`;
