import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import goldReducer from './gold'
import githubReducer from './github'
const reducer = combineReducers({
    gold: goldReducer,
    github: githubReducer,
})
const serverAxios = axios.create({
    // baseURL: 'http://localhost:6666/api/resources'
    baseURL: 'https://extension-ms.juejin.im/resources'
    
})
const clientAxios = axios.create({
  baseURL: '/resources'
});
const initialState = {};
export const initializeStore = (preloadedState = initialState, isServer) => {
    console.log('isServer', isServer)
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument(isServer ? serverAxios : clientAxios)))
    )
}