import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContextProvider';
import { observer } from "mobx-react-lite";
import MainComponent from '../components/MainComponent';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    @media only screen and (min-width: 992px) {
        flex-direction: row;
    } 
`;

export default observer(function Main() {
    const { store } = useAppContext();

    return (
        <Container>
            {store.users.map(user => <MainComponent key={user.id} id={user.id} />)}
        </Container>
    );
}) 