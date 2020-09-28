const sqlite3 = require('sqlite3').verbose();
const employeeDAO = require('./employeeDAO1Sqlite');

const db = new sqlite3.Database('./db/orm1', (err) => {
    if (err) {
        console.error(err.message);
    }
})

const main = async () => {
    const employee = {
        id: '10',
        first: 'Tod',
        middle: '',
        last: 'Hehe',
        dob: '07031997',
        phone: '4351231234',
        email: 'Horacio@yahoo.com',
        street: '80481 Betsy',
        city: 'East Darren',
        state: 'Kansas',
        zip: '69864',
        // personsId: '398efa5b-6b8f-4c91-b0bc-14055a719258',
        companyId: '619e9633-9d82-4f60-aaaf-39ec5a812294',
        department: 'Coordinator',
        title: 'Future Research Designer',
        salary: 479770,
        managerId: '4'
    }
    await employeeDAO.create(db, employee);
    // await employeeDAO.update(db, employee);
    // await employeeDAO.del(db, employee);
    // const returnedEmp = await employeeDAO.read(db, newEmployee.id);
    // console.log('found', returnedEmp);
    // console.log('list', returnedEmps);
    db.close();
}

main();