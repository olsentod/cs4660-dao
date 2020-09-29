const Nonemployee = require('./Nonemployee');

class Vendor extends Nonemployee {
    constructor (id, first, middle, last, dob, phone, email, street, city, state, zip, company) {
        super(id, first, middle, last, dob, phone, email, street, city, state, zip, company);
        this.type = 'vendor';
    }
}

module.exports = Vendor