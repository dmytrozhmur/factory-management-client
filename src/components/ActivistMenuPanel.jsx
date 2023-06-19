import React, { useState } from 'react';

const ActivistMenuPanel = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '14%', height: '100%' }}>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '20px',
        }}
      >
        <MenuItem
          text="Indicators"
          selected={selectedItem === 'Indicators'}
          onItemClick={handleItemClick}
        />
        <hr style={{ margin: '10px 0', border: 'none', borderBottom: '1px solid black' }} />
        <MenuItem
          text="Profile"
          selected={selectedItem === 'Profile'}
          onItemClick={handleItemClick}
        />
        <MenuItem
          text="Setting"
          selected={selectedItem === 'Setting'}
          onItemClick={handleItemClick}
        />
        <MenuItem
          text="Notification"
          selected={selectedItem === 'Notification'}
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
};

const MenuItem = ({ text, selected, onItemClick }) => {
  const handleClick = () => {
    onItemClick(text);
  };

  return (
    <div
      style={{
        backgroundColor: selected ? 'blue' : 'transparent',
        color: selected ? 'white' : 'black',
        padding: '10px',
        cursor: 'pointer',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '0.02em'
      }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default ActivistMenuPanel;