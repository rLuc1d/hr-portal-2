import React, { useState } from 'react';
import SetSchedule from './SetSchedule'; // Make sure the spelling matches the file
import Interview from './Interview'; 
import './Schedules.css'; // If you moved your CSS into the same folder

const Schedules = () => {
  const [activeTab, setActiveTab] = useState('Set Schedule');

  return (
    <div className="schedules-main-container">
      <h2 className="page-header">Schedules</h2>
      
      {/* Tabs */}
      <div className="tab-navigation">
        <button 
          className={`tab-link ${activeTab === 'Set Schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('Set Schedule')}
        >
          Set Schedule
        </button>
        <button 
          className={`tab-link ${activeTab === 'Interview' ? 'active' : ''}`}
          onClick={() => setActiveTab('Interview')}
        >
          Interview
        </button>
      </div>

      {/* Content Area */}
      <div className="tab-content-area">
        {activeTab === 'Set Schedule' ? (
          <SetSchedule />
        ) : (
          <Interview />
        )}
      </div>
    </div>
  );
};

export default Schedules;