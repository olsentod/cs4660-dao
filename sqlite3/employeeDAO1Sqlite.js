
const create = (db, obj) => {
    db.run(`insert into persons values($id, $first, $middle, $last, $dob, $phone, $email, $street, $city, $state, $zip)`, obj);
    console.log('Created');
}


exports.create = create;