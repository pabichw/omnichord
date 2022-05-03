import React from 'react';
import styled from 'styled-components';
import ChordButton from '../../atoms/ChordButton/ChordButton';
import chords from '../../constants/chords'

const NotesGrid = ({ onChordPress, activeChord }) => {
    return (
        <S.Grid>
            {Object.entries(chords).map(([chord]) => 
                <ChordButton key={`chord-${chord}`} chord={chord} isActive={activeChord.chord === chord} onChordPress={() => onChordPress(chord)} />
            )}
        </S.Grid>
    );
};

const S = {};
S.Grid = styled.div`
    background: ${props => props.theme.omni_background};
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    padding: 10px;
`;

export default NotesGrid;