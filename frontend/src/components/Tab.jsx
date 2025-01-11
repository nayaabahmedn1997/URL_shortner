import React, { useState } from 'react';
import '../styles/Tabs.css'; // Import custom CSS for styling
import '../styles/registerForm.css'

import URLModal from './URLModal';

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
          <div>
            <h2>Dashboard</h2>
            <p>Welcome to our tab component tutorial! This tab covers the basics of what you'll learn in this example.</p>
          </div>
        )}
        {activeTab === 'tab2' && (
          
            <URLModal />
          
        )}
        {activeTab === 'tab3' && (
          <div>
            <h2>URLs</h2>
            <p>Our tab component is fully responsive, customizable, and easy to integrate into any React project.</p>
          </div>
        )}
        
        
      </div>
    </div>
  );
}

export default Tabs;