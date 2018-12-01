import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';
import preLoadedState from './initialState.json';

export default ( initialState = preLoadedState ) => (
  createStore(
    appReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
)