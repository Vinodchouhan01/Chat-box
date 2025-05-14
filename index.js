const express = require('express') ;
const app = express() ;
const connectDB = require('./config/DB')
const dotenv = require('dotenv') ;
const wordRoutes = require('./routes/wordRoutes') ;
const cors = require('cors') ;
const cookieParser = require('cookie-parser');
dotenv.config() ;
const PORT = process.env.PORT || 8000 ;
connectDB() ;
// Middlewares
app.use(cors()) ;
app.use(express.json()) ;
app.use(cookieParser()) ;

//Routes
app.use("/api/v1/user" , wordRoutes) ;

// Health Check Route
app.get("/" , (req , res) => {
  return res.status(200).json({
    messsage: "Server is running fine" 
  })
})

app.listen(PORT , ()=>{
  console.log(`Server is running on ${PORT}`) ;
})











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const express = require('express') ;
  // const dotenv = require('dotenv') ;
  // dotenv.config() ;
  // const connectDB = require('./config/DB') ;

  // connectDB() ;

  // const app = express() ;
  
  // app.use(express.json()) ;

  // app.get('/' , (req , res) => {
  //   res.send("API is Connected...") ;
  // }) ;

  // const PORT = process.env.PORT  ;

  // app.listen(PORT , () => console.log(`Server running on ${PORT}`)) ;