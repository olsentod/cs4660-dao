
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://roman:roman123@company.atpcv.mongodb.net/<dbname>?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true })
const { contractors } = require('../arrays')

async function run() {
    try {
        await client.connect()
        const database = client.db('company')

        await client.db('company').command({ ping: 1 })
        console.log('Connected successfully to server')

        const contractorsCollection = database.collection('contractors')

        let result = await contractorsCollection.insertMany(contractors)
        console.dir(result.insertedCount)
    } finally {
      await client.close()
    }
  }

run().catch(console.dir)