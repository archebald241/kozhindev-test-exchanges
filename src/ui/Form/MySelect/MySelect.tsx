import React, {ChangeEvent} from 'react';
import {currenciesNames} from "../../../assets/currencies";
import './MySelect.scss'


interface IProps {
    value: string;
    options: Array<string>;
    onChange: (value: string) => void;
}

const MySelect:React.FC<IProps> = ({value, onChange, options}) => {
    return (
        <select value={value}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
        >
            {options.map((option) =>
                //@ts-ignore
                <option key={option} value={option}>{currenciesNames[option]}</option>
            )}
        </select>
    );
};

export default MySelect;