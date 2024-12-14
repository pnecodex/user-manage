import {initialState} from '../../src/context/userContext';

export const userProfileReducer = (state = initialState, action) =>{

    switch (action.type) {
        case "USER_PROFILE_REQUEST":
            console.log(state,'profile state initial');
        return {
            ...state,
            loading:true
        }            
        case "USER_PROFILE_SUCCESS":
        return {
            ...state,
            userprofile:action.payload,
            loading:false
        }    
        case "USER_PROFILE_ERROR":
            
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
        case "USER_PROFILE_BY_REQUEST":
            console.log(state,'profile state initial');
        return {
            ...state,
            loading:true
        }            
        case "USER_PROFILE_BY_SUCCESS":
        return {
            ...state,
            userprofile:action.payload,
            loading:false
        }    
        case "USER_PROFILE_BY_ERROR":
            
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
        case "USER_PROFILE_UPDATE_REQUEST":
            console.log(state,'profile state initial');
        return {
            ...state,
            loading:true
        }            
        case "USER_PROFILE_UPDATE_SUCCESS":
        return {
            ...state,
            userprofile:action.payload,
            loading:false
        }    
        case "USER_PROFILE_UPDATE_ERROR":
            
            return {
                ...state,
                error:action.payload,
                loading:false
            
            }    
         
        default:
            return state;
    }
}