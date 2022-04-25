interface Dictionary<T> {
    [Key: string]: T;
}

export interface ICurrency{
    success: boolean;
    date: string;
    timestamp: number;
    base: string;
    rates: Dictionary<number>
}

export interface ExchangeState{
    exchange: ICurrency;
    loading: boolean;
    error: null | string;
}

export enum ExchangeActionTypes{
    FETCH_EXCHANGE = 'FETCH_EXCHANGE',
    FETCH_EXCHANGE_SUCCESS = 'FETCH_EXCHANGE_SUCCESS',
    FETCH_EXCHANGE_ERROR = 'FETCH_EXCHANGE_ERROR'
}

interface FetchExchangeAction {
    type: ExchangeActionTypes.FETCH_EXCHANGE
}

interface FetchExchangeSuccessAction {
    type: ExchangeActionTypes.FETCH_EXCHANGE_SUCCESS;
    payload: ICurrency
}

interface FetchExchangeErrorAction {
    type: ExchangeActionTypes.FETCH_EXCHANGE_ERROR;
    payload: string
}

export type ExchangeAction = FetchExchangeAction | FetchExchangeSuccessAction | FetchExchangeErrorAction