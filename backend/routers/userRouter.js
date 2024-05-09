const {Router} = require("express")

const router = Router();

const Model = require("../model/userModel")

router.post("/add", (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/authenticate", (req,res) => {
    Model.findOne(req.body)

    .then((result) => {
        if(result){
            res.json(result)
        }else{
            res.status(401).json({message:"invalid credential"})
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });

});

module.exports = router;

