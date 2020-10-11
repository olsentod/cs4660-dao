
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://roman:roman123@company.atpcv.mongodb.net/<dbname>?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true })
const { employees, managers, executives } = require('../arrays')

async function run() {
    try {
        await client.connect()
        const database = client.db('company')

        await client.db('company').command({ ping: 1 })
        console.log('Connected successfully to server')

        const employeesCollection = database.collection('employees')
        const executivesCollection = database.collection('executives')
        const managersCollection = database.collection('managers')

        let result = await employeesCollection.insertMany(employees)
        console.dir(result.insertedCount)

        result = await executivesCollection.insertMany(executives)
        console.dir(result.insertedCount)

        result = await managersCollection.insertMany(managers)
        console.dir(result.insertedCount);
    } finally {
      await client.close()
    }
  }

run().catch(console.dir)