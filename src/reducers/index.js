import {combineReducers} from "redux";
import coust from "./count";
import list from "./list";
export const reducers = combineReducers({coust, list})