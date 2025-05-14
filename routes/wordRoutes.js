 const express = require('express') ;
 const router = express.Router() ;
 const {createUser , AllUser , getOneUser} = require('../controller/wordController') ; 
 router.post("/create" , createUser) ;
 router.get("/getUser" , AllUser) ;
 router.post("/getOneUser" , getOneUser) ;

 module.exports = router ;