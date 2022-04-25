import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypeSelector";
import {currenciesNames} from "../../../assets/currencies";

interface IProps{
    index: number;
    codeIso: string;
    value: number;
}

const TableItem:React.FC<IProps> = ({index, codeIso, value}) => {
    const {exchange} = useTypedSelector(state => state.exchange)
    // @ts-ignore
    const currencyName = currenciesNames[codeIso]

    return (
        <tr>
            <td>{index+1}</td>
            <td>{codeIso}</td>
            <td>{currencyName}</td>
            <td>{ (exchange.rates['RUB'] / value).toFixed(2) }</td>
            <td>{ (exchange.rates['USD'] / value).toFixed(2) }</td>
            <td>{ (exchange.rates['EUR'] / value).toFixed(2) }</td>
            <td>{ (exchange.rates['CNY'] / value).toFixed(2) }</td>
        </tr>
    );
};

export default TableItem;