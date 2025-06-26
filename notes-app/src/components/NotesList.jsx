import React from 'react';
import './NotesList.css';

function NotesList({ selectedGroup, notes }) {
  const groupNotes = notes[selectedGroup] || [];

  return (
    <div className="notes-list-container">
      <h2>Notes in "{selectedGroup}"</h2>

      {groupNotes.length === 0 ? (
        <p className="no-notes">No notes yet. Start typing...</p>
      ) : (
        <ul className="notes-list">
          {groupNotes.map((note, index) => (
            <li key={index} className="note-item">
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;
