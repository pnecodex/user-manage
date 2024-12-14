import React, { Component,useContext, useEffect } from 'react';
// import {  } from '../../actions/userAction';
import { Context,Provider } from '../../context/userContext';

const UserReadArea = () => {
  const  {state:{user,error,loading,userinfo},userEdit} = useContext(Context);
  // console.log(user,'userdata');
    const {firstname,lastname,email,dateofbirth} = user;
    const {id} = userinfo;
    
    useEffect(()=>{
      userEdit(id);
    },[])
    function full_name(e){
      // let attribute = e.target.getAttribute('data_name');
      const removeId = e.target.attributes.getNamedItem("data_name").value;
      console.log(removeId,'attribute');
    }
    return (
        <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
            <h6 data_name={firstname} className="mb-0" onClick={full_name}>Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
             {firstname}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Last Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
             {lastname}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {email}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Date Of Birth</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {dateofbirth}
            </div>
          </div>
     
         
        </div>
      </div>
      );
}
 
// export default userReadArea;
export default  ()=>{
    return(
        <Provider>
            <UserReadArea/>
        </Provider>
    )
}