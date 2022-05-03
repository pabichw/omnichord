import React, { useState } from 'react';
import * as Tone from 'tone';
import chords from '../../constants/chords';
import NotesGrid from '../../molecules/NotesGrid/NotesGrid';

export const Omnichord = () => {
    const [activeChord, setActiveChord] = useState({chord: null, notes: []});

    const playNote = (note) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, "16n")
    }

    return (
        <div>
            NOTES: {activeChord?.notes.map(note => <div key={`note-${note}`} onMouseEnter={() => playNote(note)}>{note}</div>) }
            <div>
                <NotesGrid onChordPress={chord => setActiveChord({ chord, notes: chords[chord]})} activeChord={activeChord} /> 
            </div>
        </div>
    )
}