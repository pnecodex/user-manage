import { userSignUp,userSignIn ,userLogout,userEdit,userUpdate} from "../actions/userAction"
import { userReducer } from "../reducers/userReducer"
import createContextData from "./createContextData"


export const initialState = {
    user:[],
    error:'',
    loading:false,
    userinfo:localStorage.getItem('userdata')?JSON.parse(localStorage.getItem('userdata')):null

}

export const  {Context,Provider} = createContextData(
    userReducer,
    {userSignUp,userSignIn,userLogout,userEdit,userUpdate },
    initialState
)