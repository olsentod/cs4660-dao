const Nonemployee = require('./Nonemployee');

class Customer extends Nonemployee {
    constructor (id, first, middle, last, dob, phone, email, street, city, state, zip, company) {
        super(id, first, middle, last, dob, phone, email, street, city, state, zip, company);
        this.type = 'customer';
    }
}

module.exports = Customer