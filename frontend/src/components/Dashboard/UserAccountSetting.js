import react, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from './header';
import UserReadArea from './userReadArea';
import { useForm } from "react-hook-form";
import { Link,useHistory } from 'react-router-dom';
import { Context,Provider } from '../../context/userContext';


const defaultImage = 'https:/bootdey.com/img/Content/avatar/avatar7.png'
const initialVar = {
  imageSrc: defaultImage,
  imageFile: null
}
const UserAccountSetting = (props) => {
  let history = useHistory();
  const { state: {user, userprofile, error, loading,userinfo }, userProfileCreate,userEdit,userUpdate } = useContext(Context);

  

  // console.log(user,'  user allread');
  const {id} = userinfo;
  
  const [firstname,setFirstName] = useState('');
  const [lastname,setlastName] = useState('');
  const [email,setemail] = useState('');
  const [dateofbirth,setDateofbirth] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  useEffect(()=>{   
    userEdit(id)
  },[]) 
  const submmitHandler = (e) => {
    userUpdate(id,{firstname,lastname,email,dateofbirth});
    history.push('/dashboard');
  }

  return (
    <div className="container">
      <div className="main-body">
        <Header />
        <div className="container">            
            {error ? <span className="alert alert-danger mt-100px" style={{marginLeft:"50px",marginBottom:'-100px'}}>{error}</span>:null}
            <div className="w-50 m-5">  
            <form onSubmit={handleSubmit(submmitHandler)}>
            <div className="form-group">
            <label for="exampleInputEmail1">First name</label>
            <input type="text" 
              className="form-control" 
              id="firstname" 
              name="firstname"
             defaultValue={user.firstname}
              ref={register({ required: true, })} 
             onChange={(e)=>{
               setFirstName( e.target.value)
             }}
              />
              {errors.firstname && <p style={{color:"red"}}>This field is required</p>}
            </div>

            <div className="form-group">
            <label for="exampleInputEmail1">Last name</label>
            <input type="text" 
              className="form-control" 
              id="lastname"
              name="lastname"
              defaultValue={user.lastname}
              aria-describedby="emailHelp" 
              ref={register({ required: true, })} 
              onChange={(e)=>{
                setlastName( e.target.value)
             }}
              />
               {errors.lastname && <p style={{color:"red"}}>This field is required</p>}
            </div>

            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email"
              name="email"
              defaultValue={user.email}
              ref={register({ required: true, })} 
              onChange={(e)=>{
                setemail( e.target.value)
             }} 
             />
              {errors.email && <p style={{color:"red"}}>This field is required</p>}
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Date Of Birth</label>
            <input 
              type="date" 
              className="form-control" 
              id="dateofbirth"
             name="dateofbrith"
              defaultValue={user.dateofbirth}
              ref={register({ required: true, })} 
              onChange={(e)=>{
                setDateofbirth( e.target.value)
             }} 
             />
              {errors.email && <p style={{color:"red"}}>This field is required</p>}
            </div>


            {/* <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password"
              ref={register({
                   required: {
                       value:true
                    },
                    minLength:{
                        value:2,
                        message:"Passwords must be at least 2 characters in length"

                    },
                    maxLength:{
                        value:12,
                        message:"Passwords must be at least 2 characters in length"

                    },
                 })} 
              onChange={(e)=>{
                setPassword( e.target.value)
             }}
              />
               {errors.password && <p style={{color:"red"}}>This field is required</p>}
            </div> */}


            {/* <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input  
            type="password" 
            className="form-control" 
            id="confirmpassword" 
            name="confirmpassword"
            ref={register({ 
                required:{
                    value:true,
                    message:"This field is required"
                },
                // validate: value =>
                // value === confirmPassword.password || "The passwords do not match"

             })} 
            onChange={(e)=>{
                setConfirmPassword( e.target.value)
             }}
            
            />
             {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword.message}</p>}
            </div> */}

            <button type="submit" className="btn btn-primary">{id ? 'Update':'Submit'}</button>
            </form>
             <div>
             </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider>
      <UserAccountSetting />
    </Provider>
  )
}