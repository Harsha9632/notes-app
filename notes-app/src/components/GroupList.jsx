import React, { useState, useRef, useEffect } from 'react';
import './GroupList.css';

function GroupList({ groups, setGroups, setSelectedGroup }) {
  const [showPopup, setShowPopup] = useState(false);
  const [groupName, setGroupName] = useState('');
  const popupRef = useRef(null);

  // Close popup on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const createGroup = () => {
    const trimmed = groupName.trim();
    if (trimmed.length < 2) {
      alert('Group name must be at least 2 characters');
      return;
    }
    if (groups.includes(trimmed)) {
      alert('Group already exists');
      return;
    }
    setGroups([...groups, trimmed]);
    setGroupName('');
    setShowPopup(false);
  };

  return (
    <div className="group-container">
      <div className="group-header">
        <h2>Groups</h2>
        <button className="create-btn" onClick={() => setShowPopup(true)}>+ New</button>
      </div>

      <ul className="group-list">
        {groups.map((group, index) => (
          <li key={index} onClick={() => setSelectedGroup(group)}>
            <div className="group-avatar">
              {group.slice(0, 2).toUpperCase()}
            </div>
            <span>{group}</span>
          </li>
        ))}
      </ul>

      {showPopup && (
        <div className="popup" ref={popupRef}>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
          />
          <button onClick={createGroup}>Create</button>
        </div>
      )}
    </div>
  );
}

export default GroupList;
