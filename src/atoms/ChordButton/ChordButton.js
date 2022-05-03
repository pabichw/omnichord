import React from 'react';
import styled from 'styled-components';

const ChordButton = ({ chord, onChordPress, isActive }) => {
    return (
        <S.Button onClick={onChordPress} isActive={isActive}>
            {chord} {isActive}
        </S.Button>
    );
};

const S = {};
S.Button = styled.button`
    background-color: ${props => props.theme.omni_button};
    height: 40px;
    width: 40px;
    &:hover {
        background: inherit;
    }

    border-style: ${props => props.isActive ? 'inset': ''};
`

export default ChordButton;