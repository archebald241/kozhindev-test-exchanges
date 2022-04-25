import {ExchangeAction, ExchangeActionTypes, ExchangeState} from "../../types/exchange";


const exchanges = localStorage.getItem('exchanges')
let foundExchanges = null

if (exchanges) {
    foundExchanges = JSON.parse(exchanges)
}

const defaultState: ExchangeState = {
    exchange:foundExchanges || {
        "success": true,
        "timestamp": 1650868683,
        "base": "EUR",
        "date": "2022-04-23",
        "rates": {
            "USD": 1.171754,
            "EUR": 1,
            "RUB": 87.349251,
            "CNY": 8.025867,
            "EGP": 19.914152,
            "JPY": 134.402082,
            "CAD": 1.563369,
            "CUP": 27.401625,
            "GBP": 0.856226,
            "CZK": 21.346866,
            "CHF": 2.0275137
        }
    },
    loading: false,
    error: null
}

export const exchangeReducer = (state = defaultState, action: ExchangeAction): ExchangeState => {
    switch (action.type) {
        case ExchangeActionTypes.FETCH_EXCHANGE:
            return {...state, loading: true, error: null}
        case ExchangeActionTypes.FETCH_EXCHANGE_SUCCESS:
            return {...state, loading: false, error: null, exchange: {...state.exchange, ...action.payload}}
        case ExchangeActionTypes.FETCH_EXCHANGE_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}