import {combineReducers} from 'redux'
import authReducer from './authReducer'
import resumeUserIdReducer from './resumeUserIdReducer';

const reducers = combineReducers({
    auth: authReducer,
    resumeUserId: resumeUserIdReducer
})

export default reducers; 