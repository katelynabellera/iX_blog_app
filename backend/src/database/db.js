const mongoose = require("mongoose");
//import mongoose

//async function
const connectDB = async () => {
  try {
    //connect to a string
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    //console log the error message
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;