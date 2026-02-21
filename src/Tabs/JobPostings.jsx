import React, { useState, useEffect, useMemo } from 'react';
<<<<<<< HEAD
=======
import { 
  Search, MapPin, MoreVertical, Briefcase, Users, Eye, Plus, Filter, 
  ChevronLeft, ChevronRight, X, Copy, XCircle, Trash2, Edit
} from 'lucide-react';
import './JobPostings.css';
>>>>>>> f0b5952 (jfjfj)

const JobPostings = () => {
  // --- UI & Menu State ---
  const [activeMenu, setActiveMenu] = useState(null);
<<<<<<< HEAD
  const [activeBranchMenu, setActiveBranchMenu] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null); 
  const [modalType, setModalType] = useState(null); 
  const [selectedJob, setSelectedJob] = useState(null);
=======
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);
  
  // --- Modal State ---
  const [activeModal, setActiveModal] = useState(null);
  const [selectedJobForAction, setSelectedJobForAction] = useState(null);
  const [editFormData, setEditFormData] = useState({ dept: '', type: '' });
>>>>>>> f0b5952 (jfjfj)

  // --- Filter State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');

<<<<<<< HEAD
  const departments = ['All Departments', 'Brokerage', 'Operations', 'Logistics', 'Documentation', 'Sales'];
  const allBranches = ['All Branches', 'Manila (Main)', 'Cebu', 'Davao'];

  const stats = [
    { label: 'Active Job Posts', value: '18', icon: '🏦', color: '#e6fff0' },
    { label: 'Total Applications', value: '294', icon: '👥', color: '#e6f0ff' },
    { label: 'Views This Month', value: '1,247', icon: '👁️', color: '#fff0e6' },
  ];

  const initialJobs = [
    { id: 1, title: 'Licensed Customs Broker', dept: 'Brokerage', branch: '3 Branches', type: 'Full-time', applicants: '35 applicants', date: 'Jan 15, 2025', status: 'Active', branchList: ['Manila (Main)', 'Cebu Branch', 'Davao Branch'] },
    { id: 2, title: 'Import & Export Head', dept: 'Operations', branch: '3 Branches', type: 'Full-time', applicants: '23 applicants', date: 'Jan 10, 2025', status: 'Active', branchList: ['Manila (Main)', 'Cebu Branch', 'Subic Branch'] },
    { id: 3, title: 'Messenger / Logistics', dept: 'Logistics', branch: '3 Branches', type: 'Full-time', applicants: '45 applicants', date: 'Jan 5, 2025', status: 'Active', branchList: ['Manila (Main)', 'Davao Branch', 'Subic Branch'] },
    { id: 4, title: 'Documentation Head', dept: 'Documentation', branch: '3 Branches', type: 'Full-time', applicants: '17 applicants', date: 'Jan 12, 2025', status: 'Active', branchList: ['Manila (Main)', 'Cebu Branch', 'Davao Branch'] },
    { id: 5, title: 'Brokerage Specialist', dept: 'Brokerage', branch: '3 Branches', type: 'Full-time', applicants: '26 applicants', date: 'Jan 8, 2025', status: 'Active', branchList: ['Cebu Branch', 'Davao Branch', 'Subic Branch'] },
  ];

  // --- Filtering Logic ---
  const filteredJobs = useMemo(() => {
    return initialJobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === 'All Departments' || job.dept === selectedDept;
      const matchesBranch = selectedBranch === 'All Branches' || job.branchList.includes(selectedBranch);
      return matchesSearch && matchesDept && matchesBranch;
    });
  }, [searchQuery, selectedDept, selectedBranch]);
=======
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
    { id: 1, title: 'Licensed Customs Broker', dept: 'Brokerage', branchCount: 3, type: 'Full-time', applicants: 35, date: 'Jan 15, 2025', status: 'Mixed' },
    { id: 2, title: 'Import & Export Head', dept: 'Operations', branchCount: 3, type: 'Full-time', applicants: 23, date: 'Jan 10, 2025', status: 'Mixed' },
    { id: 3, title: 'Messenger / Logistics', dept: 'Logistics', branchCount: 3, type: 'Full-time', applicants: 45, date: 'Jan 5, 2025', status: 'Active' },
    { id: 4, title: 'Documentation Head', dept: 'Documentation', branchCount: 3, type: 'Full-time', applicants: 17, date: 'Jan 12, 2025', status: 'Mixed' },
    { id: 5, title: 'Brokerage Specialist', dept: 'Brokerage', branchCount: 3, type: 'Full-time', applicants: 26, date: 'Jan 8, 2025', status: 'Mixed' },
    { id: 6, title: 'HR Manager', dept: 'Administration', branchCount: 1, type: 'Full-time', applicants: 12, date: 'Jan 2, 2025', status: 'Active' },
    { id: 7, title: 'Sales Associate', dept: 'Operations', branchCount: 2, type: 'Full-time', applicants: 8, date: 'Jan 1, 2025', status: 'Closed' },
  ]);

  // --- Filtering Logic ---
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === 'All Departments' || job.dept === selectedDept;
      return matchesSearch && matchesDept;
    });
  }, [jobs, searchQuery, selectedDept, selectedBranch]);
>>>>>>> f0b5952 (jfjfj)

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
<<<<<<< HEAD
      setActiveBranchMenu(null);
      setActiveFilterMenu(null);
    };
    if (activeMenu !== null || activeBranchMenu !== null || activeFilterMenu !== null) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [activeMenu, activeBranchMenu, activeFilterMenu]);

  const openModal = (type, job) => {
    setModalType(type);
    setSelectedJob(job);
    setActiveMenu(null);
    setActiveBranchMenu(null);
    setActiveFilterMenu(null);
  };

  const toggleBranchMenu = (e, jobId) => {
    e.stopPropagation();
    setActiveMenu(null);
    setActiveFilterMenu(null);
    setActiveBranchMenu(activeBranchMenu === jobId ? null : jobId);
  };

  const toggleActionMenu = (e, jobId) => {
    e.stopPropagation();
    setActiveBranchMenu(null);
=======
      setActiveFilterMenu(null);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleActionMenu = (e, jobId) => {
    e.stopPropagation();
>>>>>>> f0b5952 (jfjfj)
    setActiveFilterMenu(null);
    setActiveMenu(activeMenu === jobId ? null : jobId);
  };

  const toggleFilterMenu = (e, type) => {
    e.stopPropagation();
    setActiveMenu(null);
<<<<<<< HEAD
    setActiveBranchMenu(null);
=======
>>>>>>> f0b5952 (jfjfj)
    setActiveFilterMenu(activeFilterMenu === type ? null : type);
  };

  const selectFilterOption = (type, value) => {
    if (type === 'dept') setSelectedDept(value);
    if (type === 'branch') setSelectedBranch(value);
    setActiveFilterMenu(null);
  };

<<<<<<< HEAD
  return (
    <div className="jobs-container">
      <style>{`
        .jobs-container { display: flex; flex-direction: column; gap: 24px; color: #2d3748; font-family: 'Inter', sans-serif; }
        
        .page-identifier { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: #718096; margin-bottom: -10px; }
        .page-identifier .root { font-weight: 500; }
        .page-identifier .separator { color: #cbd5e0; }
        .page-identifier .current { color: #2d3748; font-weight: 600; }

        .header-with-icon { display: flex; align-items: center; gap: 15px; }
        .title-icon-box { background: white; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border-radius: 10px; font-size: 1.4rem; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .title-text h2 { font-size: 1.4rem; margin: 0; }
        .title-text p { font-size: 0.9rem; color: #718096; margin: 2px 0 0; }

        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .stat-card { background: white; padding: 25px; border-radius: 15px; display: flex; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
        .stat-icon { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .stat-info { display: flex; flex-direction: column; }
        .stat-label { font-size: 0.85rem; color: #718096; font-weight: 500; }
        .stat-value { font-size: 1.8rem; font-weight: 800; }

        .filters-container { background: white; padding: 15px 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.02); position: relative; z-index: 100; }
        .search-box { display: flex; align-items: center; background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 15px; border-radius: 8px; width: 300px; }
        .search-box input { border: none; background: transparent; margin-left: 10px; outline: none; width: 100%; }
        
        .filter-dropdowns { display: flex; gap: 12px; align-items: center; }
        
        .custom-dropdown-btn { 
          padding: 10px 15px; 
          border-radius: 8px; 
          border: 1px solid #e2e8f0; 
          background: white; 
          color: #4a5568; 
          font-size: 0.9rem; 
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          gap: 10px; 
          position: relative;
          min-width: 170px;
          justify-content: space-between;
        }
        .custom-dropdown-btn:hover { border-color: #5d9cec; color: #5d9cec; }
        .custom-dropdown-btn.active-applied { border-color: #5d9cec; color: #5d9cec; background: #f0f7ff; }
        
        .filter-drop-menu { 
          position: absolute; 
          top: 110%; 
          left: 0; 
          background: white; 
          border-radius: 10px; 
          box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
          z-index: 1500; 
          width: 100%; 
          padding: 6px; 
          border: 1px solid #edf2f7; 
        }
        .filter-drop-item {
          padding: 10px 12px;
          font-size: 0.85rem;
          color: #4a5568;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .filter-drop-item:hover { background: #f8fafc; color: #5d9cec; }
        .filter-drop-item.selected { background: #5d9cec; color: white; }

        .add-new-btn { background: #5d9cec; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; }

        .table-card { background: white; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden; }
        .jobs-table { width: 100%; border-collapse: collapse; }
        .jobs-table th { background: #f8fafc; padding: 15px 20px; text-align: left; font-size: 0.75rem; color: #718096; border-bottom: 1px solid #edf2f7; }
        .jobs-table td { padding: 18px 20px; border-bottom: 1px solid #f7fafc; font-size: 0.85rem; }
        .bold-text { font-weight: 700; color: #2d3748; }

        .type-badge { background: #eef2ff; color: #5d9cec; padding: 4px 10px; border-radius: 6px; font-weight: 600; font-size: 0.75rem; }
        .status-toggle-group { display: flex; background: #f1f5f9; padding: 3px; border-radius: 6px; width: fit-content; }
        .status-toggle { padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; cursor: pointer; }
        .status-toggle.active { background: #e6fff0; color: #2ecc71; }
        .status-toggle.muted { color: #94a3b8; }

        .branch-cell { display: flex; align-items: center; gap: 6px; cursor: pointer; position: relative; color: #4a5568; }
        .branch-dropdown { position: absolute; top: 100%; left: 0; background: white; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); z-index: 100; width: 160px; padding: 5px; border: 1px solid #edf2f7; margin-top: 5px; }
        .branch-item { padding: 8px 12px; font-size: 0.8rem; color: #4a5568; border-radius: 6px; display: flex; align-items: center; gap: 8px; }
        .branch-item:hover { background: #f8fafc; color: #5d9cec; }

        .applicant-cell { display: flex; align-items: center; gap: 8px; }
        .action-cell { position: relative; text-align: center; }
        .dots-btn { background: none; border: none; font-size: 1.2rem; color: #94a3b8; cursor: pointer; padding: 5px 10px; }
        
        .action-dropdown { position: absolute; right: 20px; top: 45px; background: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); z-index: 1000; width: 190px; padding: 8px; border: 1px solid #edf2f7; }
        .drop-item { width: 100%; padding: 10px 12px; display: flex; align-items: center; gap: 12px; border: none; background: none; font-size: 0.9rem; color: #4a5568; border-radius: 8px; cursor: pointer; text-align: left; }
        .drop-item:hover { background: #f8fafc; color: #5d9cec; }
        .drop-item.warning { color: #f6ad55; }
        .drop-item.delete { color: #f56565; }
        .drop-divider { height: 1px; background: #edf2f7; margin: 6px 0; }

        .table-footer { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #edf2f7; }
        .pagination-info { font-size: 0.85rem; color: #718096; }
        .pagination-controls { display: flex; gap: 5px; }
        .page-btn { padding: 6px 12px; border: 1px solid #e2e8f0; background: white; border-radius: 6px; cursor: pointer; font-size: 0.85rem; }
        .page-btn.active { background: #5d9cec; color: white; border-color: #5d9cec; }

        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); display: flex; align-items: center; justify-content: center; z-index: 2000; }
        .modal-content-box { background: white; width: 450px; border-radius: 16px; overflow: hidden; }
        .modal-header { padding: 20px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
        .close-x { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #a0aec0; }
        .modal-body { padding: 20px; display: flex; flex-direction: column; gap: 15px; }
        .form-group label { display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 8px; }
        .form-group input, .form-group select { width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; outline: none; }
        .modal-footer { padding: 20px; border-top: 1px solid #eee; display: flex; justify-content: flex-end; gap: 12px; }
        .btn-primary { background: #5d9cec; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; }
        .btn-secondary { background: white; border: 1px solid #e2e8f0; padding: 10px 20px; border-radius: 8px; color: #4a5568; cursor: pointer; }
        
        .confirm-box { background: white; width: 400px; padding: 30px; border-radius: 16px; text-align: center; }
        .confirm-icon { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2rem; }
        .confirm-icon.orange { background: #fff5eb; color: #ff7a00; }
        .confirm-icon.red { background: #fff5f5; color: #f56565; }
        .confirm-footer { display: flex; gap: 12px; margin-top: 25px; }
        .confirm-footer button { flex: 1; padding: 12px; border-radius: 10px; font-weight: 600; cursor: pointer; border: none; }
        .btn-orange { background: #ff7a00; color: white; }
        .btn-danger { background: #f56565; color: white; }

        .no-results { padding: 60px 20px; text-align: center; color: #718096; }
        .no-results h3 { color: #2d3748; margin-bottom: 10px; }
        .reset-link { color: #5d9cec; cursor: pointer; text-decoration: underline; font-weight: 600; }
      `}</style>

      {/* Page Breadcrumb Indicator */}
      <div className="page-identifier">
        <span className="root">Recruitment</span>
        <span className="separator">/</span>
        <span className="current">Job Postings</span>
      </div>

      {/* Page Header */}
      <div className="header-with-icon">
        <div className="title-icon-box">💼</div>
        <div className="title-text">
          <h2>Job Posting Management</h2>
          <p>Create, manage, and track job postings</p>
=======
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

  const handleDuplicate = () => { closeModal(); };
  const handleClosePosition = () => { closeModal(); };
  const handleDelete = () => { closeModal(); };

  return (
    <div className="jobs-container">
      
      {/* Header */}
      <div className="header-with-icon">
        <div className="title-icon-box"><Briefcase size={22} color="#3b82f6" /></div>
        <div className="title-text">
          <h2>Job Posting Management</h2>
>>>>>>> f0b5952 (jfjfj)
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
<<<<<<< HEAD
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>{stat.icon}</div>
=======
            <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bgColor, color: stat.color }}>
              {stat.icon}
            </div>
>>>>>>> f0b5952 (jfjfj)
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

<<<<<<< HEAD
      {/* Filters Row */}
      <div className="filters-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
=======
      {/* Filter Card Row */}
      <div className="filters-card">
        <div className="search-box-container">
          <Search className="search-icon" size={18} />
>>>>>>> f0b5952 (jfjfj)
          <input 
            type="text" 
            placeholder="Search job title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
<<<<<<< HEAD
        <div className="filter-dropdowns">
          
          {/* Custom Department Filter */}
          <div 
            className={`custom-dropdown-btn ${selectedDept !== 'All Departments' ? 'active-applied' : ''}`} 
            onClick={(e) => toggleFilterMenu(e, 'dept')}
          >
            <span>{selectedDept}</span>
            <small>⌄</small>
            {activeFilterMenu === 'dept' && (
              <div className="filter-drop-menu" onClick={e => e.stopPropagation()}>
                {departments.map((dept, idx) => (
                  <div 
                    key={idx} 
                    className={`filter-drop-item ${selectedDept === dept ? 'selected' : ''}`} 
                    onClick={() => selectFilterOption('dept', dept)}
                  >
=======
        
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
>>>>>>> f0b5952 (jfjfj)
                    {dept}
                  </div>
                ))}
              </div>
            )}
          </div>

<<<<<<< HEAD
          {/* Custom Branch Filter */}
          <div 
            className={`custom-dropdown-btn ${selectedBranch !== 'All Branches' ? 'active-applied' : ''}`} 
            onClick={(e) => toggleFilterMenu(e, 'branch')}
          >
            <span>{selectedBranch}</span>
            <small>⌄</small>
            {activeFilterMenu === 'branch' && (
              <div className="filter-drop-menu" onClick={e => e.stopPropagation()}>
                {allBranches.map((branch, idx) => (
                  <div 
                    key={idx} 
                    className={`filter-drop-item ${selectedBranch === branch ? 'selected' : ''}`} 
                    onClick={() => selectFilterOption('branch', branch)}
                  >
=======
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
>>>>>>> f0b5952 (jfjfj)
                    {branch}
                  </div>
                ))}
              </div>
            )}
          </div>

<<<<<<< HEAD
          <button className="add-new-btn">+ Add New Job Opening</button>
        </div>
      </div>

{/* Table Section */}
<div className="table-card">
  {filteredJobs.length > 0 ? (
    <>
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
          {filteredJobs.map((job) => (
            <tr key={job.id}>
              <td className="bold-text">{job.title}</td>
              <td>{job.dept}</td>
              <td>
                <div className="branch-text-only">
                  {/* Logic: If a specific branch is selected in the filter, show that. 
                      Otherwise, show the default summary (e.g., "3 Branches") */}
                  {selectedBranch !== 'All Branches' ? selectedBranch : job.branch}
                </div>
              </td>
              {/* ... rest of the columns remain the same ... */}
              <td><span className="type-badge">{job.type}</span></td>
              <td>
                <div className="applicant-cell">
                  <span className="user-mini-icon">👥</span>
                  <strong>{job.applicants.split(' ')[0]}</strong>
                  <span style={{color: '#718096', fontWeight: 400}}> applicants</span>
                </div>
              </td>
              <td>{job.date}</td>
              <td>
                <div className="status-toggle-group">
                  <span className={`status-toggle ${job.status === 'Active' ? 'active' : ''}`}>Active</span>
                  <span className={`status-toggle ${job.status === 'Closed' ? 'muted' : ''}`}>Closed</span>
                </div>
              </td>
              <td className="action-cell">
                <button className="dots-btn" onClick={(e) => toggleActionMenu(e, job.id)}>⋮</button>
                {/* Action dropdown logic ... */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

            {/* Pagination Footer - Persistent Design */}
            <div className="table-footer">
              <span className="pagination-info">Showing {filteredJobs.length} of {initialJobs.length} job postings</span>
              <div className="pagination-controls">
                <button className="page-btn">‹ Previous</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">Next ›</button>
              </div>
            </div>
          </>
        ) : (
          <div className="no-results">
            <h3>No job postings found</h3>
            <p>Try adjusting your filters or search terms.</p>
            <span className="reset-link" onClick={() => {
              setSearchQuery('');
              setSelectedDept('All Departments');
              setSelectedBranch('All Branches');
            }}>Reset all filters</span>
          </div>
        )}
      </div>

      {/* --- MODALS --- */}
      {modalType === 'edit' && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{margin: 0}}>Edit Job Posting</h3>
              <button className="close-x" onClick={() => setModalType(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" defaultValue={selectedJob?.title} />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select defaultValue={selectedJob?.dept}>
                  {departments.slice(1).map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Contract Type</label>
                <select defaultValue={selectedJob?.type}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
              <button className="btn-primary" onClick={() => setModalType(null)}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {modalType === 'close' && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="confirm-box" onClick={e => e.stopPropagation()}>
            <div className="confirm-icon orange">⊗</div>
            <h3 style={{margin: '0 0 10px'}}>Close Job Position</h3>
            <p style={{color: '#718096', fontSize: '0.9rem'}}>Are you sure you want to close "{selectedJob?.title}"? This will stop accepting new applications.</p>
            <div className="confirm-footer">
              <button className="btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
              <button className="btn-orange" onClick={() => setModalType(null)}>Close Position</button>
            </div>
          </div>
        </div>
      )}

      {modalType === 'delete' && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="confirm-box" onClick={e => e.stopPropagation()}>
            <div className="confirm-icon red">⚠️</div>
            <h3 style={{margin: '0 0 10px'}}>Delete Job Position</h3>
            <p style={{color: '#718096', fontSize: '0.9rem'}}>Are you sure you want to permanently delete "{selectedJob?.title}"? This action cannot be undone.</p>
            <div className="confirm-footer">
              <button className="btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
              <button className="btn-danger" onClick={() => setModalType(null)}>Delete</button>
            </div>
          </div>
        </div>
      )}
=======
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
            {/* Edit Modal (Kept standard functionality as requested) */}
            {activeModal === 'edit' && (
                <div className="modal-container" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Edit Job Posting</h3>
                        <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Job Title (Read-only)</label>
                            <input type="text" value={selectedJobForAction.title} readOnly className="form-input read-only" />
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
        </div>
      )}

>>>>>>> f0b5952 (jfjfj)
    </div>
  );
};

export default JobPostings;