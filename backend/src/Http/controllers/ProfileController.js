import models from '../../../database/models';
import fs from 'fs'
// const publics = require('../../../public')
const { Profile } = models;
const ProfileController = {
    async create(req, res, next) {
        try {
            // return console.log(publics,'public path');
            const imageUrl = " http://localhost:3000/"
            // return console.log(req.file.filename,'deco');
            const profileiamage = req.file.filename;
            const userId = req.decoded.userId;
            const userimg = await Profile.findOne({where:{userId}})
            if (userimg) {
                //file exists
                return res.status(409).send({error:'allready file exists'});
            }
            const userProfile = await Profile.create({userId, profileiamage });
            console.log(userProfile);
            return res.status(201).send(userProfile)
        } catch (error) {
            return next(new Error(error));

        }

    },
    async  Profileupdate(req, res, next) {
        try {
            // return consobodule.log(publics,'public path');
            // return console.log(req.body);
            const userId = req.decoded.userId;
            
            // const userProfileEdit = await Profile.findOne({where:{id:req.params.id, userId}});

            const userProfileEdit = await Profile.findOne({where:{userId}});
             console.log(userProfileEdit,'user edit');
          
                //file exists
                // return res.status(404).send('allready file exists');
           
            // firstname: req.body.firstname || UserEdit.firstname,
            const imageUrl = " http://localhost:3000/"
            // return console.log(req.body,'deco');
            const profileiamage = req.file.filename;
            const userProfileUpdate = await Profile.update(
                {profileiamage:profileiamage || userProfileEdit.profileiamage},
                {
                    where:{
                        id:userProfileEdit.id
                    }
                },
               {
                returning: true,
                plain: true
             }
            );
            if(userProfileUpdate){
                return res.status(201).send(userProfileUpdate)
                
            }
            if(userProfileUpdate ){
                return res.status(201).send({message:"user Profile updated successfully"})
                
          
            }
            // if(!userProfileUpdate){
            return res.status(500).send({message:"something wrong"})

            // }
        // return  console.log(userProfileUpdate,'user profile');
            // return res.status(200).send({userProfileUpdate,'User Profile Updated successfuly')
            // return res.status(200).send({ userProfileUpdate, message: { success: "userProfile created successfull" } })
        } catch (error) {
            return next(new Error(error));

        }

    },
    async userProfileBy(req, res, next) {
        try {
        
            const userId = req.decoded.userId;
            console.log(userId,'user');
            const userProfile = await Profile.findAll({where:{userId:userId}});
            // const userProfile = await Profile.findAll();
           
            
            // if(userProfile){
                return res.status(200).send({userProfile,message:'allrecodr'})
                // return res.status(200).send({userProfile,message:'messgae succes'})
            //   return res.status(200).send({ userProfile, message: { success: "user Profile get successfull" } })

            // }
        

              return res.status(404).send({message:"user Profile not available"})
        

          
           
        } catch (error) {
            return next(new Error(error));

        }

    }
}
export default ProfileController;