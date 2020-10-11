const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://roman:roman123@company.atpcv.mongodb.net/<dbname>?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true })
let employeesCollection
let executivesCollection
let managersCollection

async function run() {
    try {
        await client.connect()
        const database = client.db('company')

        await client.db('company').command({ ping: 1 })
        console.log('Connected successfully to server')

        employeesCollection = database.collection('employees')
        executivesCollection = database.collection('executives')
        managersCollection = database.collection('managers')

        if(process.argv.length > 2) {
            await recursiveFindCompanyEmployee(process.argv[2])
        }
        else {
            throw new Error('Please pass arguments for an id')
        }
    } finally {
        await client.close()
    }
}

run().catch(console.dir)

async function recursiveFindCompanyEmployee(id) {
        let findResult = await employeesCollection.findOne({id})

        if(findResult) {
            console.log(findResult)

            return
        }

        findResult = await managersCollection.findOne({id})

        if(findResult) {
            console.log(findResult)
            
            let directReports = findResult.directReports

            for(let directReport of directReports) {
                await recursiveFindCompanyEmployee(directReport)
            }

            return
        }

        findResult = await executivesCollection.findOne({id})

        if(findResult) {
            console.log(findResult)
            
            let directReports = findResult.directReports

            for(let directReport of directReports) {
                await recursiveFindCompanyEmployee(directReport)
            }

            return
        }

        if(!findResult) {
            throw new Error('Person not found')
        }

    }