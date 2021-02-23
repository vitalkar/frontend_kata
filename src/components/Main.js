import React from 'react';
import styled from 'styled-components';
import LocationBar from './LocationBar';
import DataBar from './DataBar';
import TitleBar from './TitleBar';
import Info from './Info';
import ButtonsPanel from './ButtonsPanel';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
    width: 60%;
    padding: 1rem 2.5rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px #d8d4ff;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    margin-bottom: 1rem;
`;

export default function Main() {
    return (
        <Container>
            <TitleBar />
            <Wrapper>
                <Info />
                <ButtonsPanel />
            </Wrapper>
            <LocationBar />
            <DataBar />
        </Container>
    );
} 