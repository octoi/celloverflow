import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  user: userLoginReducer,
});


const initialState = {
  user: {},
}

// creating store with devtools extension & thunk
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;