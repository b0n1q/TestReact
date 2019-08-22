import reduxLogger from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import mapFilterReducer from './reducers/mapFilterReducer';
import { reducer as formReducer } from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(preloadedState = {}) {
    return createStore(
        combineReducers({
            mapFilterReducer,
            form: formReducer
        }),
        preloadedState,
        composeEnhancers(applyMiddleware(reduxThunk, reduxLogger))
    );
}

export default configureStore();