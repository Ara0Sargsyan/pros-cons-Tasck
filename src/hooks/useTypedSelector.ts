import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/reducers/intex";


export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector