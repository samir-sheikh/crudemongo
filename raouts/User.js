//import library

const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');


//import user models
const User = require('./../models/User')

// middle Wear
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



//testing raouts
//acess public

router.get('/test' , (req , res) =>{
    return res.status(200).json({
        "status":true,
        "massage": "working properly"
    })
})




//ragister user
//method:post
//acess : pulic
//url:api/user/ragister

router.post(
    '/ragister',
 
    (req, res) => {

     

       
        //check email id present in database or not
        User.findOne({ email: req.body.email }).then(user => {

            if (user) {
                return res.status(400).json({
                    status: false,
                    massage: "User Alraedy Exists...",
                    error: {
                        email: "Email Already Exist........"
                    }
                });

            } else {
             
              

                //save new user in database
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save().then(user => {
                    return res.status(200).json({
                        status: true,
                        massage: "user ragistration sucessfull.....",
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        }

                    });


                }).catch(error => {
                    return res.status(502).json({
                        status: false,
                        massage: "database error",
                        error: {
                            db_error: "some error in database"
                        }
                    });

                });


            }
        }).catch(error => {
            return res.status(502).json({
                status: false,
                massage: "database error",
                error: {
                    db_error: "some error in database from last"
                }
            });
        })
    });

module.exports = router ;