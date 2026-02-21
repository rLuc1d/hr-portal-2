import React from 'react';
import { Search, Calendar, Inbox } from 'lucide-react';
import './Interview.css';

const Interview = () => {
  return (
    <div className="interview-container">
      {/* HEADER SECTION */}
      <div className="interview-header-card">
        <div className="interview-header-top">
          <div className="header-title-group">
            <Calendar size={20} className="header-blue-icon" />
            <h3 className="interview-card-title">Interview Schedule</h3>
          </div>
          <div className="total-interviews-badge">
            <Calendar size={14} />
            <span>0 Total Interviews Scheduled</span>
          </div>
        </div>

        <div className="interview-controls">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              className="interview-search-input"
            />
          </div>
          <button className="filter-date-btn">
            <Calendar size={18} />
            Filter by Date
          </button>
        </div>
      </div>

      {/* EMPTY STATE SECTION */}
      <div className="interview-empty-state">
        <div className="empty-icon-wrapper">
          <Calendar size={64} className="empty-calendar-icon" />
        </div>
        <h2 className="empty-title">No Interviews Scheduled</h2>
        <p className="empty-subtitle">
          Schedule interviews in the Set Schedule tab to see them here.
        </p>
        <button className="go-to-set-sched-btn">
          <Calendar size={18} />
          Go to Set Schedule
        </button>
      </div>
    </div>
  );
};

export default Interview;