const mongoose = require('mongoose')
const uri = 'mongodb+srv://roman:roman123@company.atpcv.mongodb.net/mongooseCompany?retryWrites=true&w=majority'
const VendorSchema = require('./Schemas/Vendor')

const { vendors } = require('../arrays')

async function run() {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      let db = mongoose.connection

      db.on('error', console.error.bind(console, 'connection error:'));

      db.once('open', () => {
        const Vendor = mongoose.model('Vendor', VendorSchema)

        Vendor.collection.insertMany(vendors, (err) => {
          if (err){ 
              return console.error(err)
          } else {
            console.log('Multiple vendors inserted to Collection')
            mongoose.connection.close()
          }
        })
      }) 
  }

run().catch(console.dir)