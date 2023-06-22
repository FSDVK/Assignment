const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/creatuser', [
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({ min: 5 }),
    body('username').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
    res.json({success:true})
    }  catch (error) {
        console.error(error)
        res.json({success:false})
    }
})


router.post('/loginuser',[
    body('username').isLength({ min: 5 }),
    body('password','Incorrect Password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
    let username = req.body.username;
    try {
        let userData = await User.findOne({username});
        if(!userData){
            return res.status(400).json({ error: "Try logging with correct credentials"});
        }

        

        // const data = {
        //     user: {
        //         id: userData.id
        //     }
        // }
        


        if(req.body.password !== userData.password){
            return res.status(400).json({ error: "Try logging with correct credentials"});
        }

        return res.json({success:true})

    }  catch (error) {
        console.error(error)
        res.json({success:false})
    }
})


module.exports = router;
