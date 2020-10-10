
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://roman:roman123@company.atpcv.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
const { employees } = require('../main')

async function run() {
    console.log(employees)
    try {
      await client.connect();
  
      const database = client.db('sample_mflix');
      const collection = database.collection('movies');
  
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await collection.findOne(query);
  
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

run().catch(console.dir);