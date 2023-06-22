import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FactoryAdminMenuPanel = () => {
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
      <Link to='/factory/employee'>
        <MenuItem
          text="Employee"
          selected={selectedItem === 'Employee'}
          onItemClick={handleItemClick}
        />
      </Link>
      <Link to='/factory/activists'>
        <MenuItem
          text="Activists"
          selected={selectedItem === 'Activists'}
          onItemClick={handleItemClick}
        />
      </Link>
      <Link to='/factory/payment'>
         <MenuItem
          text="Payment"
          selected={selectedItem === 'Payment'}
          onItemClick={handleItemClick}
        />
      </Link>
      <hr style={{ margin: '10px 0', border: 'none', borderBottom: '1px solid black' }} />
      <Link to='/factory/profile'>
        <MenuItem
          text="Profile"
          selected={selectedItem === 'Profile'}
          onItemClick={handleItemClick}
        />
      </Link>
      <Link to='/factory/setting'>
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

export default FactoryAdminMenuPanel;