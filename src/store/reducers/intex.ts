import {combineReducers} from "redux";
import {prosConsReducer} from "./prosConsReducer";

export const rootReducer = combineReducers({
    prosCons: prosConsReducer
})

export type rootState = ReturnType<typeof rootReducer>