import models from '../database/models';
import validator from 'validator';
const {User} = models;
export default async (req,res,next) =>{
    const {firstname,lastname,email,password,confirmpassword,dateofbirth} = req.body;
    if(!firstname){
        return res.status(400).send('FristName is required')
    }
    if(!lastname){
        return res.status(400).send('LastName is required')
    }
    if(!validator.isEmail(email)){
        return res.status(400).send('Email is required')
    }
    if(!dateofbirth){
        return res.status(400).send('Date of birth i required')
    }
    if(!password){
        return res.status(400).send('Password is required')
    }
    if(validator.isLength( password,{max:3})){
        return res.status(400).send('Password at least 6 character')
    }
    if(validator.isLength( password,{min:15})){
        return res.status(400).send('Password should be maximum 15 characters')
    }
    if(!confirmpassword){
        return res.status(400).send('ConfirmPassword is required')
    }
    if(password !== confirmpassword){
        return res.status(400).send('Password and ConfirmPassword does not match')

    }
    const user =  await User.findOne({
        where:{
            email
        }
    });
    if(user){
        return res.status(409).send("User email already exists");
    }
   
    next();
}