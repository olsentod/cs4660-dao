const sqlite3 = require('sqlite3').verbose();
const vendorDAO = require('./vendorDAO1Sqlite');

const db = new sqlite3.Database('./db/orm1', (err) => {
    if (err) {
        console.error(err.message);
    }
})

const main = async () => {
    const vendor = {
        id: '103',
        first: 'doggy',
        middle: '',
        last: 'Hehe',
        dob: '07031997',
        phone: '4351231234',
        email: 'Horacio@yahoo.com',
        street: '80481 Betsy',
        city: 'East Darren',
        state: 'Kansas',
        zip: '69864',
        personsId: 'f54e4294-60db-41dc-b972-435f7f340a16',
        companyId: '619e9633-9d82-4f60-aaaf-39ec5a812294',
        // department: 'Coordinator',
        // title: 'Future Research Designer',
        // salary: 479770,
       // managerId: '4'
       type: 'vendor'
    }
   // await vendorDAO.create(db, vendor)
    //await vendorDAO.del(db, vendor);
    console.log(await vendorDAO.list(db))
    
    
    //console.log(await vendorDAO.read(db, vendor.id))

    // await employeeDAO.update(db, employee);
    // await employeeDAO.del(db, employee);
    // const returnedEmp = await employeeDAO.read(db, newEmployee.id);
    // console.log('found', returnedEmp);
    // console.log('list', returnedEmps);
    db.close();
}

main();