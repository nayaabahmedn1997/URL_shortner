import React, { useState } from 'react';
import '../styles/Tabs.css'; // Import custom CSS for styling
import '../styles/registerForm.css'

import URLModal from './URLModal';
import AvailableURLS from './AvailableURLS';
import Dashboard from './Dashboard';

function Tabs({userData}) {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container p-1">
      <h1>Welcome to URL shortener</h1>
      <h4 className='text-center ' >Hi {userData?.name}</h4>

      {/* Tab buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          Dashboard
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          New url
        </button>
        <button
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          Available URLS
        </button>
        
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'tab1' && (
         <Dashboard />
        )}
        {activeTab === 'tab2' && (
          
            <URLModal />
          
        )}
        {activeTab === 'tab3' && (
          <AvailableURLS />
        )}
        
        
      </div>
    </div>
  );
}

export default Tabs;