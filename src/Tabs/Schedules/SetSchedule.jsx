<<<<<<< HEAD
import React from 'react';
import { Search, MapPin, Clock, ChevronDown } from 'lucide-react';
import './SetSchedule.css'; // <--- THIS WAS MISSING

const SetSchedule = () => {
  const applicants = [
    { id: 'APP004', name: 'Ana Garcia', email: 'ana.garcia@email.com', phone: '+63 945 678 9012' },
    { id: 'APP005', name: 'Jose Mendoza', email: 'jose.mendoza@email.com', phone: '+63 956 789 0123' },
    { id: 'APP006', name: 'Maria Santos', email: 'm.santos@email.com', phone: '+63 917 123 4567' },
  ];

=======
import React, { useState } from 'react';
import { Search, MapPin, Clock, ChevronDown, ArrowUpDown, Calendar, X, AlertCircle } from 'lucide-react';
import './SetSchedule.css';

const SetSchedule = () => {
  // 1. STATE MANAGEMENT
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Manila');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState('name');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedAppIds, setSelectedAppIds] = useState([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [tempDate, setTempDate] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allApplicants = [
    { id: 'APP004', name: 'Ana Garcia', email: 'ana.garcia@email.com', phone: '+63 945 678 9012', location: 'Manila' },
    { id: 'APP005', name: 'Jose Mendoza', email: 'jose.mendoza@email.com', phone: '+63 956 789 0123', location: 'Cebu' },
    { id: 'APP006', name: 'Maria Santos', email: 'm.santos@email.com', phone: '+63 917 123 4567', location: 'Manila' },
    { id: 'APP007', name: 'Zeke Miller', email: 'z.miller@email.com', phone: '+63 922 111 2222', location: 'Davao' },
  ];

  const toggleApplicant = (id) => {
    setSelectedAppIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredApplicants = allApplicants
    .filter(app => 
      (selectedLocation === 'All' || app.location === selectedLocation) &&
      (app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.id.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortConfig === 'name') return a.name.localeCompare(b.name);
      return a.id.localeCompare(b.id);
    });

  const selectedApplicantsData = allApplicants.filter(app => selectedAppIds.includes(app.id));

>>>>>>> f0b5952 (jfjfj)
  return (
    <div className="set-schedule-grid">
      {/* LEFT COLUMN: SELECT APPLICANTS */}
      <div className="sched-card">
        <div className="sched-card-header">
          <h3 className="sched-card-title">Select Applicants</h3>
<<<<<<< HEAD
          <button className="sched-text-link">Select All</button>
=======
          <div style={{ display: 'flex', gap: '10px' }}>
             <button className="sched-text-link" onClick={() => setSortConfig(sortConfig === 'name' ? 'id' : 'name')}>
              <ArrowUpDown size={14} /> Sort: {sortConfig.toUpperCase()}
            </button>
            <button className="sched-text-link" onClick={() => setSelectedAppIds(filteredApplicants.map(a => a.id))}>
                Select All
            </button>
          </div>
>>>>>>> f0b5952 (jfjfj)
        </div>

        <div className="sched-input-container">
          <Search size={18} className="sched-icon-left" />
<<<<<<< HEAD
          <input type="text" className="sched-input" placeholder="Search..." />
        </div>

        <div className="sched-dropdown-box">
          <MapPin size={18} className="sched-icon-left" />
          <span className="sched-dropdown-text">Manila</span>
          <ChevronDown size={18} className="sched-icon-right" />
        </div>

        <div className="sched-applicant-list">
          {applicants.map((app) => (
            <label key={app.id} className="sched-app-row clickable-row">
              <input 
                type="checkbox" 
                className="sched-checkbox" 
                defaultChecked={app.id === 'APP004'} 
=======
          <input 
            type="text" 
            className="sched-input" 
            placeholder="Search name or ID..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="sched-dropdown-wrapper" style={{ position: 'relative', marginBottom: '15px' }}>
          <div className="sched-dropdown-box" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <MapPin size={18} className="sched-icon-left" />
            <span className="sched-dropdown-text">{selectedLocation}</span>
            <ChevronDown size={18} className={`sched-icon-right ${isDropdownOpen ? 'rotate' : ''}`} />
          </div>
          {isDropdownOpen && (
            <div className="sched-custom-dropdown-menu">
              {['All', 'Manila', 'Cebu', 'Davao'].map((loc) => (
                <div key={loc} className="sched-dropdown-item" onClick={() => { setSelectedLocation(loc); setIsDropdownOpen(false); }}>
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sched-applicant-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {filteredApplicants.map((app) => (
            <label key={app.id} className={`sched-app-row clickable-row ${selectedAppIds.includes(app.id) ? 'selected-border' : ''}`}>
              <input 
                type="checkbox" 
                className="sched-checkbox" 
                checked={selectedAppIds.includes(app.id)}
                onChange={() => toggleApplicant(app.id)}
>>>>>>> f0b5952 (jfjfj)
              />
              <div className="sched-app-info">
                <div className="sched-app-name-line">
                  <span className="sched-id-badge">{app.id}</span>
                  <span className="sched-name-text">{app.name}</span>
                </div>
<<<<<<< HEAD
                <div className="sched-contact-line">
                  {app.email} <span className="sched-divider">|</span> {app.phone}
                </div>
=======
                <div className="sched-contact-line">{app.email} | {app.phone}</div>
>>>>>>> f0b5952 (jfjfj)
              </div>
            </label>
          ))}
        </div>
<<<<<<< HEAD
      </div>

      {/* RIGHT COLUMN: ASSIGN TIMES */}
      <div className="sched-card">
        <div className="sched-card-header">
          <h3 className="sched-card-title">Assign Dates and Times</h3>
          <span className="sched-status-label">0 Applicant(s) with Dates</span>
        </div>

=======

        {/* --- ASSIGN DATE BUTTON AREA --- */}
        <div className="assign-date-container">
            <button 
                className="sched-assign-btn"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                disabled={selectedAppIds.length === 0}
            >
                <Calendar size={18} /> Assign Date
            </button>

            {isDatePickerOpen && (
                <div className="calendar-picker-popup">
                    <div className="calendar-header-small">February 2026</div>
                    <div className="calendar-grid-small">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                            <div key={d} className="cal-weekday-label">{d}</div>
                        ))}
                        {[...Array(28)].map((_, i) => {
                            const dayNum = i + 1;
                            return (
                                <div 
                                    key={dayNum} 
                                    className={`cal-day-small ${selectedDay === dayNum ? 'active-day-blue' : ''}`}
                                    onClick={() => {
                                        setSelectedDay(dayNum);
                                        setTempDate(`Wednesday, February ${dayNum}, 2026`);
                                        setIsDatePickerOpen(false); 
                                    }}
                                >
                                    {dayNum}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {tempDate && (
                <div className="date-confirm-box">
                    <div className="selected-date-display">
                        <Calendar size={16} className="blue-text" />
                        <span>{tempDate}</span>
                    </div>
                    <button className="confirm-move-btn" onClick={() => setIsModalOpen(true)}>
                        <Calendar size={18} /> Confirm & Move to Assign Times
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="sched-card">
        <div className="sched-card-header">
          <h3 className="sched-card-title">Assign Dates and Times</h3>
          <span className="sched-status-label">{selectedAppIds.length} Applicant(s) Selected</span>
        </div>
>>>>>>> f0b5952 (jfjfj)
        <div className="sched-form-group">
          <label className="sched-label">Location</label>
          <input type="text" className="sched-input sched-filled" defaultValue="Burke Building, Binondo, Manila" />
        </div>
<<<<<<< HEAD

=======
>>>>>>> f0b5952 (jfjfj)
        <div className="sched-form-group">
          <label className="sched-label">Room Number</label>
          <input type="text" className="sched-input sched-filled" defaultValue="210" />
        </div>
<<<<<<< HEAD

        <div className="sched-dashed-box">
          <div className="sched-circle-icon">
            <Clock size={32} className="sched-orange" />
          </div>
          <p className="sched-empty-main">No applicants with dates yet</p>
          <p className="sched-empty-sub">Assign dates to applicants first</p>
        </div>

        <button className="sched-btn-primary">Save Schedule</button>
      </div>
=======
        <div className="sched-dashed-box">
          <div className="sched-circle-icon"><Clock size={32} className="sched-orange" /></div>
          <p className="sched-empty-main">No applicants with dates yet</p>
          <p className="sched-empty-sub">Assign dates to applicants first</p>
        </div>
        <button className="sched-btn-primary">Save Schedule</button>
      </div>

      {/* --- CONFIRMATION MODAL --- */}
      {isModalOpen && (
        <div className="modal-overlay">
            <div className="confirm-modal">
                <div className="modal-header">
                    <div className="modal-icon-bg"><Calendar size={20} className="blue-text" /></div>
                    <h2>Confirm Date Assignment</h2>
                    <p>Please review the following information before proceeding</p>
                </div>
                
                <div className="modal-body">
                    <div className="modal-section-box">
                        <label className="modal-label">INTERVIEW DATE</label>
                        <div className="modal-date-val">
                             <Calendar size={16} className="blue-text" />
                             <strong>{tempDate}</strong>
                        </div>
                    </div>

                    <div className="modal-section-box">
                        <label className="modal-label">SELECTED APPLICANTS ({selectedApplicantsData.length})</label>
                        <div className="modal-app-list">
                            {selectedApplicantsData.map(app => (
                                <div key={app.id} className="modal-app-item">
                                    <span className="dot-blue"></span> {app.name} <span className="gray-text">({app.id})</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="modal-next-step-box">
                        <div className="next-step-header">
                            <Clock size={16} className="orange-text" />
                            <strong>Next Step</strong>
                        </div>
                        <p>After confirmation, you'll be able to assign specific time slots to each applicant.</p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-cancel" onnpmClick={() => setIsModalOpen(false)}>Cancel</button>
                    <button className="btn-confirm" onClick={() => { alert("Saved!"); setIsModalOpen(false); }}>Confirm & Proceed</button>
                </div>
            </div>
        </div>
      )}
>>>>>>> f0b5952 (jfjfj)
    </div>
  );
};

export default SetSchedule;