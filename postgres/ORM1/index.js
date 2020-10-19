const { Client } = require('pg');
const personDAO = require('./personDAO');
const vendorDAO = require('./vendorDAO');


const main = async () => {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
  });

  await client.connect();

  const executive = {
    id: '111',
    first: 'Tod',
    middle: 'TEST',
    last: 'yeehaw',
    dob: '07031997',
    phone: '435123',
    email: 'example@.com',
    street: '80481 Betsy',
    city: 'East Darren',
    state: 'Kansas',
    zip: '69864',
    personsId: 'a9da5f82-6bea-4279-b220-c9cc9494cbb6',
    companyId: 'XD',
    type: 'vendor'
    // department: 'Coordinator',
    // title: 'Future Research Designer',
    // salary: 479770,
    // managerId: '4',
    // bonus: 123123
  }
  // console.log(await personDAO.update(client, executive));
  // console.log(await personDAO.read(client, executive.id));
  // console.log(await personDAO.list(client));
  await vendorDAO.create(client, executive);
  console.log(await vendorDAO.list(client, executive));
  await client.end();
}

main();