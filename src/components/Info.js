import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite";
import { useAppContext } from '../context/AppContextProvider';
import Avatar from './Avatar';
import InfoField from './InfoField';
import DataField from './DataField';

const Container = styled.div`
    width: 50%;
    height: 100%;
`;

const PersonalInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`;

export default observer(function Info({ id }) {
    const { store } = useAppContext();
    const { firstname, lastname, email, phone, location, interactions } = store.getUser(id).data;
    return (
        <Container>
            <PersonalInfo>
                <Avatar path={require(`../images/${firstname}_${lastname}.jpg`)} />
                <DataField label={`${firstname} ${lastname}`} value={`${interactions} interactions`} />
            </PersonalInfo>
            <InfoField label={'email'} value={email} />
            <InfoField label={'phone'} value={phone} />
            <InfoField label={'location'} value={location} />
        </Container>
    );
});
