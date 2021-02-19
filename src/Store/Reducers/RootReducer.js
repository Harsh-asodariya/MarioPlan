import authReducer from './AuthReducer';
import ProjectReducer from './ProjectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;