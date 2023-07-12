const Exercise = require("../models/Exercise");
const db = require("../config/connection");

// Sample data to seed
const seedData = [
  // add seed content below
  { email: 'test@gmail.com', duration: 3, repetition: 15, category: 'back' },
  { email: 'test@yahoo.com', duration: 6, repetition: 20, category: 'arms' },
  // Add more sample data below as needed
];

// Call the seedDatabase function to start seeding
db.once('open', async () =>{
  await Exercise.insertMany(seedData);
  console.log('Database seeded!');
  process.exit(0);
});