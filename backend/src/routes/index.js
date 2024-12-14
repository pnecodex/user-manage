
import authMiddleware from '../../middleware/authMiddleware';
import authorized from '../../middleware/authorized';
import  upload  from '../../middleware/fileMiddleware';
import ProfileController from '../Http/controllers/ProfileController';
import UserController from '../Http/controllers/UserController'

const routes = (app) =>{
   /*  -------user Route----------*/
    
    app.post('/api/signup',authMiddleware,UserController.create);
    app.post('/api/signin',UserController.Signin);
    app.get('/api/edit/:id',UserController.Edit)
    app.post('/api/edit/:id',UserController.Update)

   
    /*   -------Profile Route---------- */
  
    app.post('/api/create_profile',upload.single('profileiamage'),authorized, ProfileController.create);
    app.get('/api/user_profile_by',authorized, ProfileController.userProfileBy);
    app.patch('/api/user_profile_update',upload.single('profileiamage'),authorized, ProfileController.Profileupdate);
    // app.patch('/api/user_profile_update/:id',upload.single('profileiamage'),authorized, ProfileController.Profileupdate);

}

export default routes;