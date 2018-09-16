import {createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import {musicReducer} from './reducer'
let reducers = combineReducers({
    music: musicReducer
})
let store = createStore(reducers, applyMiddleware(thunk))
export default store
