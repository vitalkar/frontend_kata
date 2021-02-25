import React from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    padding: 0.5rem 0;
`;

const Title = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #b2bdca;
`;

export default function TitleBar({ id }) {
    return (
        <Container>
            <Title>passenger info</Title>
            <ToggleButton id={id} />
        </Container>
    );
} 