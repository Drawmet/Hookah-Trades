import * as appActions from '../actions/appActions';
import * as userActions from '../actions/userActions';

const actionTypes = {
    ...appActions,
    ...userActions
};

const initialState = {
    processing: true,
    newLoading: true,
    isConnection: false,
    isLogged: false
};

/**
 * Application reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTION_USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true
            }
    };
};