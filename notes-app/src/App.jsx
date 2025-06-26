import React, { useState } from 'react';
import GroupList from './components/GroupList';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState({});

  return (
    <div className="app-container">
      <GroupList
        groups={groups}
        setGroups={setGroups}
        setSelectedGroup={setSelectedGroup}
      />

      <div className="main-content">
        {selectedGroup ? (
          <>
            <NoteInput
              selectedGroup={selectedGroup}
              notes={notes}
              setNotes={setNotes}
            />
            <NotesList
              selectedGroup={selectedGroup}
              notes={notes}
            />
          </>
        ) : (
          <h2 className="select-message">Please select a group to begin</h2>
        )}
      </div>
    </div>
  );
}

export default App;




