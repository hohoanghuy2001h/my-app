import {LOGIN_USER} from './../action/ActionsTypes';

const initialState = {
    isLoggedIn:false,
    user:{
        email:'',
        password:''
    }
}

function logIn_Reducer(state=initialState,action){
    switch (action.type){
        case LOGIN_USER:
            return{
                ...state,
                isLoggedIn:true,
                user:action.payload
            }
        default:
            return state
    }
}

export default logIn_Reducer;