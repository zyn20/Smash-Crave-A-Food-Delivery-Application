const mongoose = require('mongoose');
const mongouri = "mongodb+srv://mernstackapp:12345@cluster0.ovqolky.mongodb.net/mernstackapp?retryWrites=true&w=majority";

// Export the MongoDB connection as a function
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
    const fetched_Data = await mongoose.connection.db.collection("food-items").find({}).toArray();
  global.food_items = fetched_Data;
  const foodCategory = await mongoose.connection.db.collection("Category").find({}).toArray();
   global.food_items = fetched_Data;
   global.FoodCategory = foodCategory;


   console.log()
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Export the MongoDB connection function so it can be used in other parts of the codebase
module.exports = connectToMongoDB;
