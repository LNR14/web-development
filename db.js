const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/PostManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if(!err)
            console.log("Connected successfully");
        else
            console.log("Error while connecting mongodb " + JSON.stringify(err,undefined,2))
})