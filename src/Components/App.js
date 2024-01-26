import React, { useState } from 'react';
import Employer from './Employer';
import Job from './Job';
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState('tab1'); // Default to tab1 //<img src={require('../Images/Quickstop.png')} alt="Quickstop" style={{ marginTop: '40px' }} height={70}></img>

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="App">
      <div className="popup">
        <div className="tabs">
          <input
            type="radio"
            id="tab1"
            name="tab"
            defaultChecked
            onChange={() => handleTabChange('tab1')}
          />
          <label htmlFor="tab1">Employer</label>

          <input
            type="radio"
            id="tab2"
            name="tab"
            onChange={() => handleTabChange('tab2')}
          />
          <label htmlFor="tab2">Job List</label>

         

          <div className="marker">
            <div id="top"></div>
            <div id="bottom"></div>
             
          </div>
        </div>

        <div className="tab-content">
          <div id="tab1-content" style={{ display: selectedTab === 'tab1' ? 'block' : 'none' }}>
            <Employer />
          </div>

          <div id="tab2-content" style={{ display: selectedTab === 'tab2' ? 'block' : 'none' }}>
            <Job />
          </div>

        

        </div>
      </div>
    </div>
  );
}

export default App;
