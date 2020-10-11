
const mongoose = require('mongoose')
const uri = 'mongodb+srv://roman:roman123@company.atpcv.mongodb.net/mongooseCompany?retryWrites=true&w=majority'
const EmployeeSchema = require('./Schemas/Employee')
const ExecutiveSchema = require('./Schemas/Executive')
const ManagerSchema = require('./Schemas/Manager')

const { employees, managers, executives } = require('../arrays')

async function run() {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      let db = mongoose.connection

      db.on('error', console.error.bind(console, 'connection error:'));

      db.once('open', () => {
        const Employee = mongoose.model('Employee', EmployeeSchema)
        const Manager = mongoose.model('Manager', ManagerSchema)
        const Executive = mongoose.model('Executive', ExecutiveSchema)

        Employee.collection.insertMany(employees, (err) => {
          if (err){ 
              return console.error(err)
          } else {
            console.log('Multiple employees inserted to Collection')
          }
        })

        Manager.collection.insertMany(managers, (err) => {
          if (err){ 
              return console.error(err)
          } else {
            console.log('Multiple managers inserted to Collection')
          }
        })

        Executive.collection.insertMany(executives, (err) => {
          if (err){ 
              return console.error(err)
          } else {
            console.log('Multiple executives inserted to Collection')
            mongoose.connection.close()
          }
        })
      }) 
  }

run().catch(console.dir)