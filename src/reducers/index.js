import { combineReducers } from "redux"
import productosReducer from "./productosReducer.js"
import alertaReducer from "./alertaReducer.js"

export default combineReducers({
   productos: productosReducer,
   alerta: alertaReducer,
})