const express = require('express');
const router = express.Router();
const Model = require('../model/FeedbackModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)
        });
});
router.get('/getall', (req, res) => {
    Model.find({}) 
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
});

router.get('/getbyid/:id', (req, res) => {
 
    console.log(req.params.id);

    // finding the data with given id
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});
//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.json(result);
            else res.status(400).json({ message: 'login failed' });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new will give updated response
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });

});
module.exports = router;