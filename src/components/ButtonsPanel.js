import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite";
import { useAppContext } from '../context/AppContextProvider';
import OptionButton from './OptionButton';

const Container = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 50%;
    /* height: 100%; */
`;

export default observer(function ButtonsPanel ({ id }) {
    const { store } = useAppContext();
    return (
        <Container>
            {store.paymentAlts.map(p => 
                <OptionButton key={p.id} id={p.id} name={p.text} userId={id} /> )}
        </Container>
    );
});