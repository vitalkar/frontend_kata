import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 1rem;
`;

const Label = styled.p`
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: #b2bdca;
`;

const Value = styled.p`
    text-transform: capitalize;
    color: #333d52;
`;

export default function InfoField({ label, value }) {
    return (
        <Container>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Container>
    );
} 