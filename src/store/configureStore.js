import {createStore, combineReducers, applyMiddleware} from 'redux';
import AuthReducer from './reducers/AuthReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
