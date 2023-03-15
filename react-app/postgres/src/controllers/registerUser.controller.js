const { User } = require('../../models');

 const userRegister = async(req,res)=>{
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

}
module.exports = userRegister