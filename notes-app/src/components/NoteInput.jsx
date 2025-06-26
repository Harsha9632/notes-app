import React, { useState } from 'react';
import './NoteInput.css';

function NoteInput({ selectedGroup, notes, setNotes }) {
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    const trimmed = noteText.trim();
    if (trimmed === '') {
      alert('Note cannot be empty');
      return;
    }

    const groupNotes = notes[selectedGroup] || [];
    const updatedNotes = {
      ...notes,
      [selectedGroup]: [...groupNotes, trimmed]
    };
    setNotes(updatedNotes);
    setNoteText('');
  };

  return (
    <div className="note-input-container">
      <textarea
        placeholder={`Write a note for "${selectedGroup}"...`}
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default NoteInput;
