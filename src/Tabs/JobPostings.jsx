import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, MapPin, MoreVertical, Briefcase, Users, Eye, Plus, Filter, 
  ChevronLeft, ChevronRight, X, Copy, XCircle, Trash2, Edit
} from 'lucide-react';
import './JobPostings.css';

const JobPostings = () => {
  // --- UI & Menu State ---
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);
  
  // --- Modal State ---
  const [activeModal, setActiveModal] = useState(null);
  const [selectedJobForAction, setSelectedJobForAction] = useState(null);
  const [editFormData, setEditFormData] = useState({ dept: '', type: '' });

  // --- Filter State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');

  const departments = ['All Departments', 'Brokerage', 'Operations', 'Logistics', 'Documentation', 'Administration'];
  const editModalDepartments = departments.slice(1); 
  const allBranches = ['All Branches', 'Cebu', 'Davao', 'Manila'];
  const contractTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  // Stats Data updated to match image colors and icons
  const stats = [
    { label: 'Active Job Posts', value: '18', icon: <Briefcase size={20} />, bgColor: '#DCFCE7', color: '#16A34A' },
    { label: 'Total Applications', value: '294', icon: <Users size={20} />, bgColor: '#E0E7FF', color: '#6366F1' },
    { label: 'Views This Month', value: '1,247', icon: <Eye size={20} />, bgColor: '#FFEDD5', color: '#EA580C' },
  ];

  // --- Job Data ---
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Licensed Customs Broker', dept: 'Brokerage', branchCount: 3, type: 'Full-time', applicants: 35, date: 'Jan 15, 2025', status: 'Active' },
    { id: 2, title: 'Import & Export Head', dept: 'Operations', branchCount: 3, type: 'Full-time', applicants: 23, date: 'Jan 10, 2025', status: 'Active' },
    { id: 3, title: 'Messenger / Logistics', dept: 'Logistics', branchCount: 3, type: 'Full-time', applicants: 45, date: 'Jan 5, 2025', status: 'Active' },
    { id: 4, title: 'Documentation Head', dept: 'Documentation', branchCount: 3, type: 'Full-time', applicants: 17, date: 'Jan 12, 2025', status: 'Mixed' },
    { id: 5, title: 'Brokerage Specialist', dept: 'Brokerage', branchCount: 3, type: 'Full-time', applicants: 26, date: 'Jan 8, 2025', status: 'Active' },
    { id: 6, title: 'HR Manager', dept: 'Administration', branchCount: 1, type: 'Full-time', applicants: 12, date: 'Jan 2, 2025', status: 'Active' },
    { id: 7, title: 'Sales Associate', dept: 'Operations', branchCount: 2, type: 'Full-time', applicants: 8, date: 'Jan 1, 2025', status: 'Closed' },
  ]);

  // --- Filtering Logic ---
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === 'All Departments' || job.dept === selectedDept;
      const matchesBranch = selectedBranch === 'All Branches' || true; // Simplified branch filtering
      return matchesSearch && matchesDept && matchesBranch;
    });
  }, [jobs, searchQuery, selectedDept, selectedBranch]);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
      setActiveFilterMenu(null);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleActionMenu = (e, jobId) => {
    e.stopPropagation();
    setActiveFilterMenu(null);
    setActiveMenu(activeMenu === jobId ? null : jobId);
  };

  const toggleFilterMenu = (e, type) => {
    e.stopPropagation();
    setActiveMenu(null);
    setActiveFilterMenu(activeFilterMenu === type ? null : type);
  };

  const selectFilterOption = (type, value) => {
    if (type === 'dept') setSelectedDept(value);
    if (type === 'branch') setSelectedBranch(value);
    setActiveFilterMenu(null);
  };

  const openModal = (actionType, job) => {
    setSelectedJobForAction(job);
    setActiveModal(actionType);
    setActiveMenu(null); 
    if (actionType === 'edit') {
        setEditFormData({ dept: job.dept, type: job.type });
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedJobForAction(null);
  };

  const handleEditFormChange = (e) => {
      const { name, value } = e.target;
      setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const saveEditChanges = () => {
      if (!selectedJobForAction) return;
      const updatedJobs = jobs.map(job => 
          job.id === selectedJobForAction.id 
              ? { ...job, dept: editFormData.dept, type: editFormData.type }
              : job
      );
      setJobs(updatedJobs);
      closeModal();
  };

  const handleDuplicate = () => { 
    // Add duplicate logic here
    closeModal(); 
  };
  
  const handleClosePosition = () => { 
    if (selectedJobForAction) {
      const updatedJobs = jobs.map(job => 
        job.id === selectedJobForAction.id 
          ? { ...job, status: 'Closed' }
          : job
      );
      setJobs(updatedJobs);
    }
    closeModal(); 
  };
  
  const handleDelete = () => { 
    if (selectedJobForAction) {
      const updatedJobs = jobs.filter(job => job.id !== selectedJobForAction.id);
      setJobs(updatedJobs);
    }
    closeModal(); 
  };

  return (
    <div className="jobs-container">
      
      {/* Header */}
      <div className="header-with-icon">
        <div className="title-icon-box"><Briefcase size={22} color="#3b82f6" /></div>
        <div className="title-text">
          <h2>Job Posting Management</h2>
          <p>Create, manage, and track job postings</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bgColor, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Card Row */}
      <div className="filters-card">
        <div className="search-box-container">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search job title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="filter-actions-right">
          {/* Department Filter */}
          <div className="custom-dropdown-container">
            <div className="custom-dropdown-btn" onClick={(e) => toggleFilterMenu(e, 'dept')}>
              <Filter size={14} style={{marginRight: '8px', color: '#94a3b8'}} />
              <span>{selectedDept}</span>
            </div>
            {activeFilterMenu === 'dept' && (
              <div className="filter-drop-menu" onClick={e => e.stopPropagation()}>
                {departments.map((dept, idx) => (
                  <div key={idx} className={`filter-drop-item ${selectedDept === dept ? 'selected' : ''}`} onClick={() => selectFilterOption('dept', dept)}>
                    {dept}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Branch Filter */}
          <div className="custom-dropdown-container">
            <div className="custom-dropdown-btn" onClick={(e) => toggleFilterMenu(e, 'branch')}>
              <Filter size={14} style={{marginRight: '8px', color: '#94a3b8'}} />
              <span>{selectedBranch}</span>
            </div>
            {activeFilterMenu === 'branch' && (
              <div className="filter-drop-menu" onClick={e => e.stopPropagation()}>
                {allBranches.map((branch, idx) => (
                  <div key={idx} className={`filter-drop-item ${selectedBranch === branch ? 'selected' : ''}`} onClick={() => selectFilterOption('branch', branch)}>
                    {branch}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="add-new-btn">
            <Plus size={16} strokeWidth={2.5} /> Add New Job Opening
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-card">
        <table className="jobs-table">
          <thead>
            <tr>
              <th>JOB TITLE</th>
              <th>DEPARTMENT</th>
              <th>BRANCH</th> 
              <th>CONTRACT TYPE</th>
              <th>APPLICANTS</th>
              <th>DATE POSTED</th>
              <th>STATUS</th>
              <th style={{ textAlign: 'center' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.slice(0, 5).map((job) => (
              <tr key={job.id}>
                <td className="bold-text">{job.title}</td>
                <td>{job.dept}</td>
                <td>
                  <div className="branch-cell">
                    <MapPin size={14} color="#94a3b8" />
                    <span>{selectedBranch !== 'All Branches' ? selectedBranch : `${job.branchCount} Branches`}</span>
                  </div>
                </td>
                <td><span className="type-badge">{job.type}</span></td>
                <td>
                  <div className="applicant-cell">
                    <Users size={14} color="#5d9cec" />
                    <strong>{job.applicants}</strong> applicants
                  </div>
                </td>
                <td>{job.date}</td>
                <td><span className={`status-badge ${job.status.toLowerCase()}`}>{job.status}</span></td>
                <td className="action-cell">
                  <button className="dots-btn" onClick={(e) => toggleActionMenu(e, job.id)}>
                    <MoreVertical size={18} />
                  </button>
                  {activeMenu === job.id && (
                    <div className="action-dropdown">
                        <div className="drop-item" onClick={() => openModal('edit', job)}>
                            <Edit size={16} /> Edit Job
                        </div>
                        <div className="drop-item" onClick={() => openModal('duplicate', job)}>
                            <Copy size={16} /> Duplicate
                        </div>
                        <div className="drop-item warning" onClick={() => openModal('close', job)}>
                            <XCircle size={16} /> Close Position
                        </div>
                        <div className="drop-divider"></div>
                        <div className="drop-item delete" onClick={() => openModal('delete', job)}>
                            <Trash2 size={16} /> Delete
                        </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="table-footer">
          <span className="pagination-info">Showing 5 of {jobs.length} job postings</span>
          <div className="pagination-controls">
            <button className="page-text-btn"><ChevronLeft size={14} /> Previous</button>
            <div className="page-numbers">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
            </div>
            <button className="page-text-btn">Next <ChevronRight size={14} /></button>
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
            {/* Edit Modal */}
            {activeModal === 'edit' && (
                <div className="modal-container" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Edit Job Posting</h3>
                        <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Job Title (Read-only)</label>
                            <input type="text" value={selectedJobForAction?.title} readOnly className="form-input read-only" />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <select name="dept" value={editFormData.dept} onChange={handleEditFormChange} className="form-select">
                                {editModalDepartments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Contract Type</label>
                            <select name="type" value={editFormData.type} onChange={handleEditFormChange} className="form-select">
                                {contractTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={closeModal}>Cancel</button>
                        <button className="btn-save" onClick={saveEditChanges}>Save Changes</button>
                    </div>
                </div>
            )}

            {/* Duplicate Modal */}
            {activeModal === 'duplicate' && (
                <div className="modal-container confirm-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Duplicate Job Posting</h3>
                        <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to duplicate "{selectedJobForAction?.title}"?</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={closeModal}>Cancel</button>
                        <button className="btn-save" onClick={handleDuplicate}>Duplicate</button>
                    </div>
                </div>
            )}

            {/* Close Position Modal */}
            {activeModal === 'close' && (
                <div className="modal-container confirm-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Close Position</h3>
                        <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to close "{selectedJobForAction?.title}"? This will stop accepting new applications.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={closeModal}>Cancel</button>
                        <button className="btn-warning" onClick={handleClosePosition}>Close Position</button>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {activeModal === 'delete' && (
                <div className="modal-container confirm-modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Delete Job Posting</h3>
                        <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to permanently delete "{selectedJobForAction?.title}"? This action cannot be undone.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={closeModal}>Cancel</button>
                        <button className="btn-delete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
      )}
    </div>
  );
};

export default JobPostings;