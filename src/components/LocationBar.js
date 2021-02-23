import React from 'react';
import styled from 'styled-components';
import DataField from './DataField';
import CheckIcon from '../images/done.svg';
import LocationIcon from '../images/place.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 20%;
    margin-bottom: 1rem;
`;

const SymbolsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 75%;
    padding-bottom: 1rem;
`;

const DataContainer = styled.div`
    display: flex;
    width: 75%;
    padding-bottom: 1rem;
    border-bottom: 1px solid #b2bdca;
`;

const Check = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background: #d8d4ff url(${props => props.path}) no-repeat center / 75% 75%;
`;

const Location = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background: #d1f7d5 url(${props => props.path}) no-repeat center / 75% 75%;
`;

const Line = styled.div`
    width: 50%;
    height: 2px;
    margin: 0 0.5rem;
    background-color: #d8d4ff;
`;

const Gap = styled.div`
    width: calc(50% - 6rem);
    height: 100%;
`;

export default function LocationBar() {
    return (
        <Container>
            <SymbolsContainer>
                <Check path={CheckIcon} />
                <Line />
                <Location path={LocationIcon} />
            </SymbolsContainer>
            <DataContainer>
                <DataField label={'jackson heights'} value={'32-27 74th street'} />
                <Gap />
                <DataField label={'green point'} value={'81 gate st brooklyn'} />
            </DataContainer>
        </Container>
    );
} 