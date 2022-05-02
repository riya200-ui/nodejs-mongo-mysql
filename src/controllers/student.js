const mongoose = require("mongoose")
const Student = require("../models/student")

exports.create = (req,res) => {
   
        const createpost = new Student(
            {
            _id:new mongoose.Types.ObjectId(),
            name: req.body.name,
            email:req.body.email
            });

        createpost.save()

        .then(result => {
            console.log(result);
            res.status(200).json({
                message:'created post successfully',
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error:err})
        })
}

exports.create = (req,res) => {
   
    const createpost = new Student(
        {
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        email:req.body.email
        });

    createpost.save()

    .then(result => {
        console.log(result);
        res.status(200).json({
            message:'created post successfully',
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err})
    })
}



exports.update = (req,res) => {
    try{
    res.send.status(200).json('create post')
    }catch{
    res.status(400).json('not create post')
    }
}

exports.delete = (req,res) => {
    try{
    res.send.status(200).json('create post')
    }catch{
    res.status(400).json('not create post')
    }
}

