import react, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useForm } from "react-hook-form";
import { Context, Provider } from '../../context/userProfileContext';
import Header from './header';
import UserReadArea from './userReadArea';

const Dashboard = () => {
  const { state: { userprofile, error, loading }, userProfileCreate,userProfileby } = useContext(Context);
  const {profileiamage} = userprofile;
//   console.log(userprofile.data,profileiamage,'user image');
 
  console.log(Cookies.get('token'),'dashboard');
  useEffect(  ()=>{
     userProfileby(Cookies)
     console.log(Cookies,'cokies get profile page');
  },[])



  return (
    <div className="container">
        <h2>Profile image</h2>
    </div>
  );
}

export default () => {
  return (
    <Provider>
      <Dashboard />
    </Provider>
  )
}