const sqlite3 = require('sqlite3').verbose();
const employeeDAO = require('./employeeDAO1Sqlite');

const db = new sqlite3.Database('./db/orm1', (err) => {
    if (err) {
        console.error(err.message);
    }
})

const main = () => {
    const employee = {
        $id: '4',
        $first: 'Nikko',
        $middle: 'V',
        $last: 'Witting',
        $dob: '07031997',
        $phone: '4351231234',
        $email: 'Horacio@yahoo.com',
        $street: '80481 Betsy',
        $city: 'East Darren',
        $state: 'Kansas',
        $zip: '69864',
      }
    employeeDAO.create(db,employee);

    db.close();
}

main();