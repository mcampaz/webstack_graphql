let users = [{
    id: "1",
    name: 'Mario',
    cars_owned: ['DRT123', 'TRT123']
}, {
    id: "2",
    name: 'Manuel',
    cars_owned: ['FGH123']
}, {
    id: "3",
    name: 'Maria',
    cars_owned: ['HTY123']
}, {
    id: "4",
    name: 'Mariza',
    cars_owned: []
}];

let cars = [{
    id: 'DRT123',
    color: 'green',
    make: 'Dodge',
    ownedBy: "1"
}, {
    id: 'FGH123',
    color: 'gray',
    make: 'Ford',
    ownedBy: "2"
}, {
    id: 'HTY123',
    color: 'yellow',
    make: 'Toyota',
    ownedBy: "3"
}, {
    id: 'TRT123',
    color: 'blue',
    make: 'Mazda',
    ownedBy: "1"
}];

module.exports = {
    users,
    cars
};

