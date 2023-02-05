import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer";


rootReducer = combineReducers({app: reducer})
export const store = createStore(rootReducer)
