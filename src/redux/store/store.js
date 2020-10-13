import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer from '../reducers/userReducer';

const allEnhancers = compose(applyMiddleware(thunk));

const rootReducer = combineReducers({
    userReducer
})

const configureStore = () => createStore(rootReducer, allEnhancers);

export default configureStore;