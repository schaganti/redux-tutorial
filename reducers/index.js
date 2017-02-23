import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import posts from './posts';
import comments from './comments';
import chags from './chags';

const rootReducer = combineReducers({posts, comments, chags, routing : routerReducer});

export default rootReducer;
