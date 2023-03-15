const express = require('express')
// const userRegister = ('../controllers/registerUser.controller.js')
const { User } = require('../../models');

const router = express.Router();

router.post("/user/post", async(req,res)=>{
    try{
      const user =    await  User.create({
              firstName : req.body.firstName,
              lastName : req.body.lastName,
              email : req.body.email,
          })   
        res.status(200).send({status:"success", message:user})
    }
        catch(error){
          res.status(404).send({status:"fail", message:`failed to register a user ${error}`})
         console.log(error);
        }
  
  });
router.get('/home',(req, res) =>{
    res.status(200).json({message:"home page"})
})

module.exports = router;