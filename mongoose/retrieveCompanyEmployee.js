
const mongoose = require('mongoose')
const uri = 'mongooseuri'
const EmployeeSchema = require('./Schemas/Employee')
const ExecutiveSchema = require('./Schemas/Executive')
const ManagerSchema = require('./Schemas/Manager')
let Employee
let Manager
let Executive

async function run() {
      let args = process.argv.slice(-1)
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      let db = mongoose.connection

      db.on('error', console.error.bind(console, 'connection error:'));

      db.once('open', async () => {
        Employee = mongoose.model('Employee', EmployeeSchema)
        Manager = mongoose.model('Manager', ManagerSchema)
        Executive = mongoose.model('Executive', ExecutiveSchema)

        if(args.length > 0) {
            await recursiveFindCompanyEmployee(args[0])
            mongoose.connection.close()
        }
        else {
            mongoose.connection.close()
            throw new Error('Please pass arguments for an id')
        }
      }) 
  }

run().catch(console.dir)

async function recursiveFindCompanyEmployee(id) {
        let findResult = await Employee.findOne({id})

        if(findResult) {
            console.log(findResult)

            return
        }

        findResult = await Manager.findOne({id})

        if(findResult) {
            console.log(findResult)
            
            let directReports = findResult.directReports

            for(let directReport of directReports) {
                await recursiveFindCompanyEmployee(directReport)
            }

            return
        }

        findResult = await Executive.findOne({id})

        if(findResult) {
            console.log(findResult)
            
            let directReports = findResult.directReports

            for(let directReport of directReports) {
                await recursiveFindCompanyEmployee(directReport)
            }

            return
        }

        if(!findResult) {
            mongoose.connection.close()
            throw new Error('Person not found')
        }

    }