import React from 'react';
import './Navbar.scss'
import {useActionsExchange} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import MyButton from "../../ui/Form/MyButton";

const Navbar = () => {

    const {fetchExchange} = useActionsExchange()
    const {exchange} = useTypedSelector(state => state.exchange)

    const date = new Date(exchange.date).toLocaleString('ru', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });

    const updateData = async () => {
        fetchExchange()
    }

    return (
        <nav>
            <div className={'projectName'}>Курсы валют</div>
            <div className={'dataInfo'}>
                <span>Дата последнего обновления: {date}</span>
                <MyButton onClick={() => updateData()}>Обновить</MyButton>
            </div>
        </nav>
    );
};

export default Navbar;