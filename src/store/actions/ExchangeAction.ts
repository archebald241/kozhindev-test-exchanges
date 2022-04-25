import axios, { AxiosError } from "axios"
import {Dispatch} from "redux"
import {ExchangeAction, ExchangeActionTypes} from "../../types/exchange";
import {currenciesNames} from "../../assets/currencies";


export const fetchExchange = () => {
    return async (dispatch: Dispatch<ExchangeAction>) => {
        dispatch({type: ExchangeActionTypes.FETCH_EXCHANGE})

        let symbols = ''
        for (let key of Object.keys(currenciesNames)) {
            symbols += key + ','
        }

        await axios.get('/latest', {
            params: {
                access_key: '8b42464d57467da6b3865192fb879f6a',
                symbols: symbols
            }
        })
            .then((response) => {
                const data = response.data
                setTimeout(() => {
                    dispatch({type: ExchangeActionTypes.FETCH_EXCHANGE_SUCCESS, payload: data})
                }, 1000)
                localStorage.setItem('exchanges', JSON.stringify(data));
            })
            .catch((e: AxiosError) => {
                dispatch({
                    type: ExchangeActionTypes.FETCH_EXCHANGE_ERROR,
                    payload: 'Произошла ошибка загрузки данных'
                })
                console.log(JSON.parse(e.request.response))
            })
    }
}