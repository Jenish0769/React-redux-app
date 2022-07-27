import { combineReducers, createStore } from 'redux'
import counterReducer from './reducers/reducer';


const rootReducer = combineReducers({
    counterReducer
})

const store = createStore(rootReducer)
export default store




