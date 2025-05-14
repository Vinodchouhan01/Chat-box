 const mongoose = require("mongoose") ;

 const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL) ;
    console.log("DataBase is connected") ;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
   }
 }

 module.exports = connectDB ;