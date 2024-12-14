import { userProfileCreate,userProfileby,userProfilUpdate } from "../actions/userProfileAction"
import { userProfileReducer } from "../reducers/userProfileReducer"
import createContextData from "./createContextData"


export const initialState = {
    userprofile:[],
    error:'',
    loading:false,
    message:''
    // userinfo:localStorage.getItem('userdata')?JSON.parse(localStorage.getItem('userdata')):null

}
export const  {Context,Provider} = createContextData(
    userProfileReducer,
    {userProfileCreate,userProfileby,userProfilUpdate},
    initialState
)