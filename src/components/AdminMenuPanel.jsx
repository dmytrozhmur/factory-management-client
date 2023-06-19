import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminMenuPanel = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '25vh', height: '95vh' }}>
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
      <Link to='/admin/accounts'>
        <MenuItem
            text="Factory admin"
            selected={selectedItem === 'Factory admin'}
            onItemClick={handleItemClick}
          />
      </Link>  
        
      <Link to='/admin/factories'>
        <MenuItem
            text="Factory"
            selected={selectedItem === 'Factory'}
            onItemClick={handleItemClick}
        />
      </Link>  
        <div style={{ borderTop: '1px solid black', margin: '10px 0' }}></div>
      <Link to='/admin/profile'>
        <MenuItem
            text="Profile"
            selected={selectedItem === 'Profile'}
            onItemClick={handleItemClick}
        />
      </Link>  
      <Link to='/admin/setting'>
        <MenuItem
          text="Setting"
          selected={selectedItem === 'Setting'}
          onItemClick={handleItemClick}
        />
      </Link>
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

export default AdminMenuPanel;
