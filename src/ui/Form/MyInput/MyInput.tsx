import React, {ChangeEvent} from 'react';
import './MyInput.scss';


interface IProps {
    type: string;
    placeholder: string;
    value: string;
    onChange?: (value: string) => void;
}

const defaultFunc = () => {}

const MyInput: React.FC<IProps> = ({placeholder, type, value, onChange = defaultFunc}) => {
    return (
        <input
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
        />
    );
};

export default MyInput;