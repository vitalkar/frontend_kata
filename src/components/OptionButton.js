import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite";
import { useAppContext } from '../context/AppContextProvider';

const Button = styled.div`
    width: 90%;
    height: 4rem;
    margin: 1%;
    border: 1px solid #d8d4ff;
    border-radius: 5px;
    background: url(${props => props.path}) no-repeat center / 50% 50%;
    background-color: ${props => props.chosen ? '#3c7dfa' : 'transparent'};
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
        border: 1px solid #3c7dfa;
    }
    @media only screen and (min-width: 992px) {
        height: 5rem;
        width: 40%;
        max-width: 40%;
        margin: 3%;
    } 
`;

const OptionButton = observer(({ id, name, userId }) => {

    const { store } = useAppContext();
    let { chosenPaymentAlt } = store.getUser(userId).data.settings;

    const handleClick = (e) => {
        store.getUser(userId).data.settings.chosenPaymentAlt = id;
    }

    return <Button 
                onClick={handleClick} 
                path={require(`../images/${id === chosenPaymentAlt ? name + '_white' : name}.svg`).default } 
                chosen={id === chosenPaymentAlt} 
            />;
});

export default OptionButton;