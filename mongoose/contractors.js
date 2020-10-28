const mongoose = require('mongoose')
const uri = 'mongooseuri'
const ContractorSchema = require('./Schemas/Contractor')

const { contractors } = require('../arrays')

async function run() {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      let db = mongoose.connection

      db.on('error', console.error.bind(console, 'connection error:'));

      db.once('open', () => {
        const Contractor = mongoose.model('Contractor', ContractorSchema)

        Contractor.collection.insertMany(contractors, (err) => {
          if (err){ 
              return console.error(err)
          } else {
            console.log('Multiple contractors inserted to Collection')
            mongoose.connection.close()
          }
        })
      }) 
  }

run().catch(console.dir)