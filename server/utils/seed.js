const { MongoClient } = require('mongodb');

// Connection URI
// haven't set up mongodb uri yet
const uri = 'mongodb://your-mongodb-uri';

// Database name
const dbName = 'exercises';

// Sample data to seed
const seedData = [
    // add content below
  {  },
  {  },
  // Add more sample data as needed
];

// Function to seed the database
async function seedDatabase() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the database
    const db = client.db(dbName);

    // Access the collection
    const collection = db.collection('your-collection-name');

    // Insert the seed data into the collection
    await collection.insertMany(seedData);

// logs to console if the seed worked or not
    console.log('Seed data inserted successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    // Close the connection
    client.close();
  }
}

// Call the seedDatabase function to start seeding
seedDatabase();
