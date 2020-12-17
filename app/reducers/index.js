import {combineReducers} from 'redux';
import enquiryReducer from './enquiries';

const reducers = combineReducers({
  enquiryReducer,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
