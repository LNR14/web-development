const express = require('express')
var router = express.Router()
var objectID = require('mongoose').Types.ObjectId

var {PostMessage}=require("../models/postMessage")

router.get('/',(req,res)=>{
    PostMessage.find((err,docs) => {
        if(!err) res.send(docs)
        else console.log("Error while retrieving the document" ,JSON.stringify(err,undefined,2))

    })
})

router.post('/', (req, res) => {
    console.log("entered post")
    var newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' , JSON.stringify(err, undefined, 2))    
    })
})

router.put('/:id',(req,res)=>{
    if (!objectID.isValid(req.params.id))
    return res.status(400).send('No record with given id :',req.params.id)

    var updateRecord = {
        title : req.body.title,
        message : req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id,{$set:updateRecord},{new:true},(err,docs)=>{
        if(!err) res.send(docs)
        else console.log("Error while updating record " ,JSON.stringify(err,undefined,2)) 

    })
})

router.delete('/:id',(req,res)=>{
    if(!objectID.isValid(req.params.id)) 
    return res.status(400).send('No Record with given id :',req.params.id)

    PostMessage.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err)res.send(docs)
        else console.log("Error while deleting record ",JSON.stringify(err,undefined,2))
    })

})

module.exports = router