import React from 'react';
import './ExchangeTablePage.scss'
import TableItem from "./TableItem";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import ConvertForm from "./ConvertForm";
import MyLoader from "../../ui/MyLoader";

const ExchangeTablePage = () => {
    const {exchange, loading} = useTypedSelector(state => state.exchange)

    return (
        <main>
            {loading && <MyLoader />}
            <ConvertForm />
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Код валюты</th>
                    <th>Название валюты</th>
                    <th>Курс к Рублю</th>
                    <th>Курс к Доллару</th>
                    <th>Курс к Евро</th>
                    <th>Курс к Юаню</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(exchange.rates).map((key, index) =>
                    <TableItem key={index} index={index} codeIso={key} value={exchange.rates[key]}/>
                )}
                </tbody>
            </table>
        </main>
    );
};

export default ExchangeTablePage;