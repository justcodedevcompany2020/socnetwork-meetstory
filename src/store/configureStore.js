import {createStore, combineReducers} from 'redux';
import statusReducer from './reducers/statusReducer';

const rootReducer = combineReducers({
  auth: statusReducer,
});

export const store = createStore(rootReducer);
