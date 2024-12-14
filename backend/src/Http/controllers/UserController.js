import models from '../../../database/models';
import { sendConfirmationEmail } from '../../../services/EmailServices';
import { comparePassword, hashPassword,jwtToken } from '../../../utils';
import bcrypt from 'bcryptjs';
import derypto from 'crypto-js';
const { User } = models;

const UserController = {
    async create(req,res,next){
    try { 
        const {firstname,lastname,email,password,dateofbirth} = req.body;
        const hash = hashPassword(password);
        const UserSignup = await User.create({firstname,lastname,email,password:hash,dateofbirth});
        const {id} = UserSignup;
        await sendConfirmationEmail(UserSignup)
        const token = jwtToken.createToken(UserSignup);

        // return res.status(200).send({UserSignup,token,message:{success:"user signup successfull"}})
        return res.status(200).send({id,firstname,lastname,email,dateofbirth,token,message:{success:"user signup successfull"}})
    } catch (error) {
        return next(new Error(error));

    }

    },
    async Signin(req,res,next){
        try {
            // return console.log(req.body);
            const {email,password} = req.body;
            const UserSignIn = await User.findOne({where:{email}});
            // req.session.Userinfo = UserSignIn.id;
            if(UserSignIn && comparePassword(password,UserSignIn.password)){
                const {id,email,firstname,lastname,dateofbirth} = UserSignIn
                const token = jwtToken.createToken(UserSignIn);
                // console.log(typeof req.session.Userinfo,' req.session.Userinfo');
                return res.status(200).send({id,email,firstname,lastname,dateofbirth,token,message:{success:"user signin successfull"}})
            }
            if(!UserSignIn){
               
                return res.status(404).send('User Not found');
            
            }
            return res.status(400).send('invalid password and email');
            

        } catch (error) {
            return next(new Error(error));
    
        }
    
    },
    async Edit(req,res,next){
        try {
            
            
        const UserEdit = await User.findOne({where:{ id:req.params.id }});
        const {id,firstname,lastname,email,dateofbirth,password} = UserEdit;
    //   return console.log(firstname,lastname,email,dateofbirth,'userdata');
     
            // return res.status(200).send(UserEdit);
            return res.status(200).send({firstname,lastname,email,dateofbirth})

        } catch (error) {
            return next(new Error(error));
    
        }
    
    },
    async Update(req,res,next){
        try {
        
        const UserEdit = await User.findOne({where:{ id:req.params.id }});
        // return console.log(UserEdit.firstname,'useredit');
        // const {firstname,lastname,email,dateofbirth} = UserEdit;
       
        const UserUpdate = await User.update(
            {
                firstname: req.body.firstname || UserEdit.firstname,
                lastname: req.body.lastname || UserEdit.lastname,
                email: req.body.email || UserEdit.email,
                dateofbirth: req.body.dateofbirth || UserEdit.dateofbirth,
               
            },
            {
                where:{
                    id:UserEdit.id
                }
            },
           {
            returning: true,
            plain: true
         }
        );
        //    return console.log(UserEdit,'edit');
            return res.status(200).send(UserUpdate);
            // return res.status(200).send({firstname,lastname,email,dateofbirth})

        } catch (error) {
            return next(new Error(error));
    
        }
    
    },

}
export default UserController;