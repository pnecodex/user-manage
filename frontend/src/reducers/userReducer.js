import {initialState} from '../../src/context/userContext';

export const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case "USER_SIGNUP_REQUEST":
            console.log(state,'state initial');
        return {
            ...state,
            loading:true
        }            
        case "USER_SIGNUP_SUCCESS":
        return {
            ...state,
            user:action.payload,
            loading:false
        }    
        case "USER_SIGNUP_ERROR":
            console.log(action,'action is ');
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
        case "USER_SIGNIN_REQUEST":
            console.log(state,'user signin');
        return {
            ...state,
            loading:true
        }            
        case "USER_SIGNIN_SUCCESS":
        return {
            ...state,
            user:action.payload,
            loading:false
        }    
        case "USER_SIGNIN_ERROR":
            console.log(action,'action is ');
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
        case "USER_EDIT_REQUEST":
            // console.log(state,'user signin');
        return {
            ...state,
            loading:true
        }            
        case "USER_EDIT_SUCCESS":
        return {
            ...state,
            user:action.payload,
            loading:false
        }    
        case "USER_EDIT_ERROR":
            console.log(action,'action is ');
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
        case "USER_UPDATE_REQUEST":
            // console.log(state,'user signin');
        return {
            ...state,
            loading:true
        }            
        case "USER_UPDATE_SUCCESS":
        return {
            ...state,
            user:action.payload,
            loading:false
        }    
        case "USER_UPDATE_ERROR":
            console.log(action,'action is ');
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
        default:
            return state;
    }
}