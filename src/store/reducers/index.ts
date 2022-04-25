import { combineReducers } from "redux";
import { exchangeReducer } from "./ExchangeReducer";


export const rootReducer = combineReducers({
    exchange: exchangeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
