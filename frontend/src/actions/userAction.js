import axios from 'axios';
import { Redirect } from 'react-router-dom';
import apiCall from './api';
import Cookies from 'js-cookie';
export const userSignUp = (dispatch) => async (signup) => {
    try {
        console.log(signup, 'signup data');
        dispatch({
            type: "USER_SIGNUP_REQUEST"
        });
        // const res = await apiCall(`/signup`, 'post', signup);
        const {data} = await axios.post('http://localhost:8000/api/signup',signup,
        {
            // headers: {
            //     'Authorization': `Basic ${token}` 
            //   }
        }
        )
        // Cookies.set('token', res.data.token);
       console.log(data,'data db');
        localStorage.setItem('userdata', JSON.stringify(data));
        dispatch({
            type: "USER_SIGNUP_SUCCESS",
            payload: data,
         
        });
      
    } catch (error) {
        dispatch({
            type: "USER_SIGNUP_ERROR",
            payload: error.response.data,
           
        })
    }
}
export const userSignIn = (dispatch) => async (singin) => {
    try {

        dispatch({
            type: "USER_SIGNIN_REQUEST"
        });
        
        const {data} = await axios.post('http://localhost:8000/api/signin',singin,
        {
            // headers: {
            //     'Authorization': `Basic ${token}` 
            //   }
        }
        )
        console.log(data,'data error show');
        Cookies.set('token', data.token);
        // window.location.href = '/dashboard';
        localStorage.setItem('userdata', JSON.stringify(data));
        dispatch({
            type: "USER_SIGNIN_SUCCESS",
            payload: data
        });
        
        document.location.href = '/dashboard'
    } catch (error) {
        dispatch({
            type: "USER_SIGNIN_ERROR",
            payload:error.response.data,

        })
    }
}
export const userEdit = (dispatch) => async (id) => {
    try {

        dispatch({
            type: "USER_EDIT_REQUEST"
        });
        // const res = await apiCall(`/edit/${id}`);
        const {data} = await axios.get(`http://localhost:8000/api/edit/${id}`,
        {
            // headers: {
            //     'Authorization': `Basic ${token}` 
            //   }
        }
        )

       
        dispatch({
            type: "USER_EDIT_SUCCESS",
            payload: data
        });

    } catch (error) {
        dispatch({
            type: "USER_EDIT_ERROR",
            payload: error.response.data
        })
    }
}
export const userUpdate = (dispatch) => async (id,updateuserData) => {
    try {
        // const id = 3
        console.log(id,updateuserData,'vari action ');
        dispatch({
            type: "USER_UPDATE_REQUEST",
        });

        // const res = await apiCall(`/edit/${id}`,'post',updateuserData);
           // const res = await apiCall(`/edit/${id}`);
           const {data} = await axios.post(`http://localhost:8000/api/edit/${id}`,updateuserData,
           {
               // headers: {
               //     'Authorization': `Basic ${token}` 
               //   }
           }
           )
        
        console.log(data,'res method is excute');
       
        dispatch({  
            type: "USER_UPDATE_SUCCESS",
            payload: data
        });

    } catch (error) {
        dispatch({
            type: "USER_UPDATE_ERROR",
            payload: error.response.data
        })
    }
}

export const userLogout = (dispatch) => () => {
    localStorage.removeItem('userdata');
    document.location.href = '/signin';
}