import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    border-radius: 50%;
    background: url(${props => props.path}) no-repeat center / cover;
`;

export default function Avatar({ path }) {
    return <Container path={path.default} />;
} 