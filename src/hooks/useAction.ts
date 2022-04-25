import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ExchangeAction from '../store/actions/ExchangeAction'


export const useActionsExchange = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ExchangeAction, dispatch)
}