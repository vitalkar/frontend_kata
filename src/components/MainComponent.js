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
    margin: 1rem 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 20px #d8d4ff;
    @media only screen and (min-width: 992px) {
        height: 60%;
        width: 33%;
    } 
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    margin-bottom: 1rem;
`;

export default function MainComponent({ id }) {
    return (
        <Container>
            <TitleBar id={id} />
            <Wrapper>
                <Info id={id} />
                <ButtonsPanel id={id} />
            </Wrapper>
            <LocationBar id={id} />
            <DataBar id={id} />
        </Container>
    );
} 