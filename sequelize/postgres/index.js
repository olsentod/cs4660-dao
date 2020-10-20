const { Person, Employee } = require('./models');
const { sequelize } = require('./db');

const personData = {
    first: 'TESTTO',
    middle: 'R',
    last: 'yeehaw',
    dob: '1997-07-03',
    phone: '435123',
    email: 'example@.com',
    street: '80481 Betsy',
    city: 'East Darren',
    state: 'Kansas',
    zip: '69864'
}

const employeeData = {
    companyId: '12345',
    department: 'CS',
    title: 'Programmer',
    salary: 50000
}

const main = async () => {
    try {
        await sequelize.sync({ force: true });

        const person = await Person.create(personData);
        const employee = await Employee.create({ ...employeeData, personId: person.id });

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
}

main();