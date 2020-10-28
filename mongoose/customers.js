const mongoose = require('mongoose')
const uri = 'mongooseuri'
const CustomerSchema = require('./Schemas/Customer')

const { customers } = require('../arrays')

async function run() {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      let db = mongoose.connection

      db.on('error', console.error.bind(console, 'connection error:'));

      db.once('open', () => {
        const Customer = mongoose.model('Customer', CustomerSchema)

        Customer.collection.insertMany(customers, (err) => {
          if (err){ 
              return console.error(err)
          } else {
            console.log('Multiple customers inserted to Collection')
            mongoose.connection.close()
          }
        })
      }) 
  }

run().catch(console.dir)