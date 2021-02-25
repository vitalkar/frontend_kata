import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite";
import { useAppContext } from '../context/AppContextProvider';
import DataField from './DataField';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 15%;
`;

export default observer(function DataBar({ id }) {
    const { store } = useAppContext();
    const { distance, time, price, energy } = store.getUser(id).data.stats;
    return (
        <Container>
            <DataField label={distance} value={'distance'} />
            <DataField label={time} value={'time'} />
            <DataField label={`$${price}`} value={'price'} />
            <DataField label={`${energy}kWh`} value={'energy'} />
        </Container>
    );
});