import { LOGIN_USER } from './ActionsTypes';

export const Login_action_user = (payload) => {
    return {
        type: LOGIN_USER,
        payload: payload
    }
}