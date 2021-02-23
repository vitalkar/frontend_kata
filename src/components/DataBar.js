import React from 'react';
import styled from 'styled-components';
import DataField from './DataField';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    height: 15%;
`;

export default function DataBar() {
    return (
        <Container>
            <DataField label={'12.3 km'} value={'distance'} />
            <DataField label={'42 min'} value={'time'} />
            <DataField label={'$34.20'} value={'price'} />
            <DataField label={'12.4kWh'} value={'energy'} />
        </Container>
    );
} 