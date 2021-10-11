import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";


let redusers = combineReducers({
    main:mainReducer
})
let store = createStore(redusers)

export default store

window.store= store