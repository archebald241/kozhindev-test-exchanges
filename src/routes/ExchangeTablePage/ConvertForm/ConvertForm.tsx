import React, {useEffect, useState} from 'react';
import './ConvertForm.scss'
import MyInput from '../../../ui/Form/MyInput';
import MySelect from "../../../ui/Form/MySelect";
import {currenciesNames} from "../../../assets/currencies";
import {useTypedSelector} from "../../../hooks/useTypeSelector";

const ConvertForm = () => {
    const [firstCurrency, setFirstCurrency] = useState('RUB')
    const [secondCurrency, setSecondCurrency] = useState('USD')

    const [firstCurrencyCount, setFirstCurrencyCount] = useState('')
    const [secondCurrencyCount, setSecondCurrencyCount] = useState('')

    const {exchange} = useTypedSelector(state => state.exchange)
    const currencyList: Array<string> = Object.keys(currenciesNames)

    useEffect(() => {
        const convertData = localStorage.getItem('convertData')
        let foundData = null

        if (convertData) {
            foundData = JSON.parse(convertData)
            setFirstCurrency(foundData.firstCurrency)
            setSecondCurrency(foundData.secondCurrency)
        }
    }, [])

    useEffect(() => {
        const convertData = {
            firstCurrency: firstCurrency,
            secondCurrency: secondCurrency
        }

        localStorage.setItem('convertData', JSON.stringify(convertData));

        const from = exchange.rates[firstCurrency]
        const to = exchange.rates[secondCurrency]
        const count = parseFloat(firstCurrencyCount)

        setSecondCurrencyCount(((to * count) / from).toFixed(5))
    }, [firstCurrency, firstCurrencyCount, secondCurrency])

    return (
        <form>
            <div className={'from'}>
                <MyInput
                    type="number"
                    placeholder='0.00'
                    value={firstCurrencyCount}
                    onChange={(value) => setFirstCurrencyCount(value)}
                />
                <MySelect
                    value={firstCurrency}
                    options={currencyList}
                    onChange={(value) => setFirstCurrency(value)}
                />
            </div>
            <div className={'to'}>
                <MyInput
                    type="number"
                    placeholder='0.00'
                    value={secondCurrencyCount}
                />
                <MySelect
                    value={secondCurrency}
                    options={currencyList}
                    onChange={(value) => setSecondCurrency(value)}
                />
            </div>
        </form>
    );
};

export default ConvertForm;