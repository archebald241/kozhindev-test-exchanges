import React from 'react';
import './MyButton.scss'

interface MyButtonProps {
    onClick: () => void;
    children: string;
}

const MyButton: React.FC<MyButtonProps> = ({onClick, children}) => {
    return (
        <button onClick={() => onClick()}>{children}</button>
    );
};

export default MyButton;