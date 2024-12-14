import React, { Component,useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context,Provider } from '../../context/userContext';
const Header = () => {
  const  {state:{user,error,loading,userinfo},userLogout} = useContext(Context);
  const {id} = userinfo;
//  console.log(id,'id in');
  const UserLogout =(e)=>{
    e.preventDefault();
    userLogout();
  }
    return ( 
        
        <nav aria-label="breadcrumb" className="main-breadcrumb ">
        <ol className="breadcrumb">
         <li className="breadcrumb-item active"><a href="javascript:void(0)" onClick={UserLogout}>Logout</a></li>
         <li className="breadcrumb-item active"><Link to={`/user_account_setting/${id}`}>account setting</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to="/dashboard">User Profile</Link></li>
       
         </ol>
         
      </nav>
     );
}
 
// export default Header;
export default  ()=>{
    return(
        <Provider>
            <Header/>
        </Provider>
    )
}