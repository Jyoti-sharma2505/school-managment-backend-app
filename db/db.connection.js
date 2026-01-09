const mongoose = require('mongoose');

// const mongoURI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
 try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Connection Failed", error);
  }
}

module.exports = { initializeDatabase };