const Customer = require('./Customer');
const Employee = require('./Employee');
const Person = require('./Person');

const main = () => {
    const test = new Customer(
        '1',
        'Tod', 
        'R', 
        'Olsen', 
        new Date(), 
        '555-555-5555', 
        'test@email.com', 
        '123 Street', 
        'Orem', 
        'Utah',
        '84058', 
        '123',
        'Engineering',
        'Programmer',
        1000000,
        '2');

    console.log(test);
}

main();