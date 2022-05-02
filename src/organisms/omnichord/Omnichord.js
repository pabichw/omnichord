import React, { useState } from 'react';
import chords from '../../constants/chords'
import * as Tone from 'tone';

export const Omnichord = () => {
    const [notes, setNotes] = useState([]);

    const playNote = (note) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, "8n")
    }

    return (
        <div>
            NOTES: {notes.map(note => <div key={`note-${note}`} onMouseEnter={() => playNote(note)}>{note}</div>) }
            <div>
                {Object.entries(chords).map(([chord, notes]) => 
                    <p key={`chord-${chord}`} onClick={() => setNotes(notes)}>{chord}</p>
                )} 
            </div>
        </div>
    )
}