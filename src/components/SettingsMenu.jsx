import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SettingsMenu() {
  return (
    <>  
        <div className='dashboard'>
            <h1 style={{ color: 'blue', marginBottom: '50px', marginTop: 0 }}>Setting</h1>
            <p style={{ color: 'blue' }}>change language</p>
        </div>
        <div className='languageSwitch'>
            <Switch {...label} defaultChecked />
        </div>
    </>
  );
}