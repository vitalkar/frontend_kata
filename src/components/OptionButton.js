import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContextProvider';

const Button = styled.div`
    width: 10rem;
    min-width: 40%;
    height: 5rem;
    min-height: 25%;
    margin: 1rem;
    border: 1px solid #d8d4ff;
    border-radius: 5px;
    background: url(${props => props.path}) no-repeat center / 50% 50%;
    background-color: ${props => props.chosen ? '#3c7dfa' : 'transparent'};
    cursor: pointer;
`;

export default function OptionButton({ id, name }) {

    const { chosenPaymentAlt, setChosenPaymentAlt } = useAppContext();

    const handleClick = (e) => {
        setChosenPaymentAlt(id);
    }

    return <Button 
                onClick={handleClick} 
                path={require(`../images/${id === chosenPaymentAlt ? name + '_white' : name}.svg`).default } 
                chosen={id === chosenPaymentAlt} 
            />;
} 