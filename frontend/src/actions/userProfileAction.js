import apiCall from './api';
import Cookies from 'js-cookie'
import axios from 'axios';
export const userProfileCreate = (dispatch) => async (fileimage,Cookies) => {
    try {
        // console.log(Cookies,'cookies is get');
        // console.log(Cookies.get('token'),'cookiesget function ');
        // console.log(fileimage,' file image functon  ');
        dispatch({
            type:"USER_PROFILE_REQUEST"
        });
        const token = Cookies.get('token');
        // const res = await apiCall('/create_profile','post',fileimage,Cookies.get('token'));
        const {data} = await axios.post('http://localhost:8000/api/create_profile',fileimage,
        {
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        }
        );
        console.log(data,'res action function');
        
        dispatch({
            type:"USER_PROFILE_SUCCESS",
            payload:data.userProfile
        });
        // return data;
      
    } catch (error) {
         dispatch({
            type:"USER_PROFILE_ERROR",
            payload:error.response.messgae
        })
    }
}
export const userProfileby = (dispatch) => async (Cookies) => {
    try {
        // const token = Cookies.get('token');
        // console.log(token,'cookies is get');
        // console.log(Cookies.get('token'),'cookiesget function ');
        // console.log(fileimage,' file image functon  ');
        // dispatch({
        //     type:"USER_PROFILE_BY_REQUEST"
        // });
    
        // const res = await apiCall('/user_profile_by','get', Cookies,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRuYW5hbGlrQGdtYWlsLmNvbSIsImlhdCI6MTYxMjE3NzM0MSwiZXhwIjoxNjEyMjYzNzQxfQ._Kr824lM1Uj_cBC3BgZKTlGo72nsXyodIlfE3LTFa6A");
        // const res = await apiCall('/user_profile_by','get', Cookies.get('token'));
    //   return  console.log(res,'user profile action function');
    const token = Cookies.get('token');
    const {data} = await axios.get('http://localhost:8000/api/user_profile_by',
    {
        headers: {
            'Authorization': `Bearer ${token}` 
          }
    }
    );
        dispatch({
            type:"USER_PROFILE_BY_SUCCESS",
            payload:data.userProfile,
          
        });
        return data;
      
    } catch (error) {
         dispatch({
            type:"USER_PROFILE_BY_ERROR",
            payload:error.response.data.message,
        })
    }
}
export const userProfilUpdate = (dispatch) => async (userProfileUpdate,Cookies) => {
    try {
        // const token = Cookies.get('token');
        // console.log(token,'cookies is get');
        // console.log(Cookies.get('token'),'cookiesget function ');
        // console.log(fileimage,' file image functon  ');
        dispatch({
            type:"USER_PROFILE_UPDATE_REQUEST"
        });
        const token = Cookies.get('token');
        console.log(token,'token inside');
        // const res = awaia apiCall('/user_profile_by','get', Cookies,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRuYW5hbGlrQGdtYWlsLmNvbSIsImlhdCI6MTYxMjE3NzM0MSwiZXhwIjoxNjEyMjYzNzQxfQ._Kr824lM1Uj_cBC3BgZKTlGo72nsXyodIlfE3LTFa6A");
        const {data} = await axios.patch('http://localhost:8000/api/user_profile_update',userProfileUpdate,
        {
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        }
        );
        // const res = await apiCall('/user_profile_by','get', Cookies.get('token'));
    //   return  console.log(data,'user profile action function');
        console.log(data,'update error');
        dispatch({
            type:"USER_PROFILE_UPDATE_SUCCESS",
            payload:data
        });
        // return data;
      
    } catch (error) {
         dispatch({
            type:"USER_PROFILE_UPDATE_ERROR",
            payload:error.response.message       
         })
    }
}