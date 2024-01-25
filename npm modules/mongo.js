const MongoClient = require('mongodb').MongoClient;

// Connection URI
const uri = 'mongodb://localhost:27017';

// A new MongoClient
const client = new MongoClient(uri);

// Connecting to the MongoDB server
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  const db = client.db('mydatabase');

  client.close();
  
});
