const {MongoClient} = require('mongodb');

const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

async function getData(){

  try {
    await client.connect();
    const db = client.db('local');
    const result = await db.collection('yourCollectionName').find({}).toArray();
    console.log(result);
  } catch (error) {
    console.error('Error retrieving data:', error);
  } finally {
    await client.close();
  }
}

getData();
