const mongoose = require('mongoose');
const db_url = process.env.DB_URL;
const assert = require('assert')

//connection with mongodb

mongoose.connect(
    db_url,
    {
     
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true      
    },
    (error , link) => {
         //check erro
        assert===(error ,null , "Database connection faild........")

        //database connaction sucessfull
        console.log("DB connections sucessfull.............");

    }
)