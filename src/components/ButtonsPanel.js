import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContextProvider';
import OptionButton from './OptionButton';

const Container = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

export default function ButtonsPanel() {
    const { paymentAlts } = useAppContext();
    return (
        <Container>
            {paymentAlts.map(p => 
                <OptionButton key={p.id} id={p.id} name={p.text} /> )}
        </Container>
    );
} 