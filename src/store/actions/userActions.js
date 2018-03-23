import users from '../../utils/UserData.json';

export const ACTION_USER_LOGIN_REQUEST = 'ACTION_USER_LOGIN_REQUEST';
export const ACTION_USER_LOGIN_SUCCESS = 'ACTION_USER_LOGIN_SUCCESS';
export const ACTION_USER_LOGIN_FAILURE = 'ACTION_USER_LOGIN_FAILURE';

function loginUserRequestAction(){
    return {
        type: ACTION_USER_LOGIN_REQUEST,
        payload: {
            status: 'Login Request'
        }
    }
}

function loginUserSuccessAction(){
    return {
        type: ACTION_USER_LOGIN_SUCCESS,
        payload: {
            message: 'Login Success'
        }
    }
}

function loginUserFailureAction(message){
    return {
        type: ACTION_USER_LOGIN_FAILURE,
        payload: {
            message: message
        }
    }
}

export function loginUserAction(username, password){
    dispatch(loginUserRequestAction());
    const user = users.find((user) => user.username === username || user.email === email);
    if(user && user.password === password){
        dispatch(loginUserSuccessAction());
    }
    else {
        dispatch(loginUserFailureAction('Invalid Username or Email with Password'));
    }
}