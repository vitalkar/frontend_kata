import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite";
import { useAppContext } from '../context/AppContextProvider';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto;
`;

const Text = styled.div`
    margin-right: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #333d52;
`;

const Toggle = styled.div`
    width: 4rem;
    height: 4rem;
    background: url(${props => props.toggle}) no-repeat center / 100% 100%;
    cursor: pointer;
`;

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 4rem;
    height: 2rem;
    border-radius: 20px;
    background-color:  ${props => props.hideInfo ? '#b2bdca' : '#3c7dfa'};
    cursor: pointer;
    transition: all 0.2s linear;
`;

const ToggleCircle = styled.div`
    position: absolute;
    left: ${props => props.hideInfo ? '0.1rem' : 'calc(100% - 1.9rem)'};
    top: 0.1rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 0.2s linear;
`;

export default observer(function ToggleButton({ id }) {

    const { store } = useAppContext();
    const { hideInfo } = store.getUser(id).data.settings;
    const handleToggle = (e) => {
        store.getUser(id).data.settings.hideInfo = !hideInfo;
    }

    return (
        <Container>
            <Text>hide information</Text>
            <ToggleContainer onClick={handleToggle} hideInfo={hideInfo}>
                <ToggleCircle hideInfo={hideInfo} />
            </ToggleContainer>
        </Container>
    );
});
