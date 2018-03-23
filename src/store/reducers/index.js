import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import nav from './navigationReducer';
import app from './appReducer';
// import user from './userReducer';
// import repos from './reposReducer';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['app', 'user']
}

const rootReducer = combineReducers({
    app,
    // repos,
    // user
})

