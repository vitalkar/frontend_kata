import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Label = styled.p`
    text-transform: uppercase;
    color: #333d52;
`;

const Value = styled.p`
    text-transform: capitalize;
    color: #b2bdca;

`;

export default function DataField({ label, value }) {
    return (
        <Container>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Container>
    );
} 