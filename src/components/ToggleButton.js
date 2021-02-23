import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContextProvider';
import ToggleOn from '../images/toggle_on.svg';
import ToggleOff from '../images/toggle_off.svg';

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
    transition: all 0.2s linear;
`;

export default function TitleBar() {

    const { hideInfo, setHideInfo } = useAppContext();

    const handleToggle = (e) => {
        setHideInfo(!hideInfo);
    }

    return (
        <Container>
            <Text>hide information</Text>
            <Toggle onClick={handleToggle} toggle={hideInfo ? ToggleOff : ToggleOn} />
        </Container>
    );
} 