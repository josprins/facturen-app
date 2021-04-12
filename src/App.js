import React, { useState } from 'react';
import './App.css';
import InfoSection from './components/sections/InfoSection';
import ActionSection from './components/sections/ActionSection';
import InvoiceContainer from './components/sections/InvoiceContainer';
import CreateInvoice from './components/sections/CreateInvoice';

const App = () => {
  const [smallDevice, setSmallDevice] = useState(Boolean);

  const GetSmallDevice = size => {
    function handleResize() {
      if (window.innerWidth <= size) setSmallDevice(true);
      else setSmallDevice(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  const handleSelectMenu = e => {
    e.preventDefault();
    const element = document.getElementById('status').style;
    const arrow = document.getElementById('arrow').style;
    if (element.display === '') {
      element.display = 'block';
      arrow.transform = 'rotate(180deg)';
    } else {
      element.display = '';
      arrow.transform = 'none';
    }
  };

  return (
    <div className='App'>
      <InfoSection />
      <div className='facturen-container'>
        <ActionSection
          smallDevice={smallDevice}
          getSmallDevice={GetSmallDevice}
          handleSelectMenu={handleSelectMenu}
        />
        <InvoiceContainer
          smallDevice={smallDevice}
          getSmallDevice={GetSmallDevice}
        />
        <CreateInvoice />
      </div>
    </div>
  );
};

export default App;
