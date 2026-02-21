import React, { useState } from 'react';
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, Eye, Download, ChevronDown } from 'lucide-react';
=======
import { 
  Users, Search, ChevronDown, Eye, Download, ChevronLeft, ChevronRight, 
  Briefcase, MapPin, Mail, Phone, X, User, FileText, File 
} from 'lucide-react';
import './Applicants.css';
>>>>>>> f0b5952 (jfjfj)

const Applicants = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [positionFilter, setPositionFilter] = useState('All Positions');
  const [branchFilter, setBranchFilter] = useState('All Branches');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

<<<<<<< HEAD
  // Dummy Data with 7 total applicants
  const allApplicants = [
    { id: 'APP001', name: 'Juan Dela Cruz', email: 'juan.delacruz@email.com', phone: '+63 912 345 6789', date: '01-15-2025', status: 'APPLIED', position: 'Licensed Customs Broker', branch: 'Manila (Main)' },
    { id: 'APP002', name: 'Maria Santos', email: 'maria.santos@email.com', phone: '+63 923 456 7890', date: '01-14-2025', status: 'APPLIED', position: 'Import & Export Head', branch: 'Cebu Branch' },
    { id: 'APP003', name: 'Pedro Reyes', email: 'pedro.reyes@email.com', phone: '+63 934 567 8901', date: '01-13-2025', status: 'HIRED', position: 'Messenger / Logistics', branch: 'Davao Branch' },
    { id: 'APP004', name: 'Ana Garcia', email: 'ana.garcia@email.com', phone: '+63 945 678 9012', date: '01-12-2025', status: 'INTERVIEW', position: 'Documentation Head', branch: 'Manila (Main)' },
    { id: 'APP005', name: 'Jose Mendoza', email: 'jose.mendoza@email.com', phone: '+63 956 789 0123', date: '01-11-2025', status: 'INTERVIEW', position: 'Brokerage Specialist', branch: 'Cebu Branch' },
    { id: 'APP006', name: 'Liza Soberano', email: 'liza.s@email.com', phone: '+63 967 890 1234', date: '01-10-2025', status: 'APPLIED', position: 'HR Assistant', branch: 'Manila (Main)' },
    { id: 'APP007', name: 'Ricardo Dalisay', email: 'cardodalisay@email.com', phone: '+63 978 901 2345', date: '01-09-2025', status: 'HIRED', position: 'Security Lead', branch: 'Davao Branch' },
  ];

  // Positions and Branches lists for dropdowns
  const positions = [
    'All Positions',
    'Licensed Customs Broker',
    'Import & Export Head',
    'Documentation Head',
    'Brokerage Specialist',
    'Messenger / Logistics',
    'HR Assistant',
    'Security Lead'
  ];

  const branches = [
    'All Branches',
    'Manila (Main)',
    'Cebu Branch',
    'Davao Branch',
    'Subic Branch'
  ];

  // Multi-criteria Filtering Logic
=======
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  // Data matching the prototype exact details
  const allApplicants = [
    { 
      id: 'APP001', name: 'Juan Dela Cruz', firstName: 'Juan', lastName: 'Dela Cruz', middleInitial: 'S', 
      email: 'juan.delacruz@email.com', phone: '+63 912 345 6789', date: '01-15-2025', dob: '1995-01-15', age: 30, nationality: 'Filipino',
      status: 'APPLIED', position: 'Licensed Customs Broker', branch: 'Manila', address: { region: 'NCR', province: 'Metro Manila', city: 'Quezon City', barangay: 'Commonwealth', detailed: '123 Main Street' }, medicalCondition: 'No' 
    },
    { 
      id: 'APP002', name: 'Maria Santos', firstName: 'Maria', lastName: 'Santos', middleInitial: 'A', 
      email: 'maria.santos@email.com', phone: '+63 923 456 7890', date: '01-14-2025', dob: '1992-05-20', age: 32, nationality: 'Filipino',
      status: 'APPLIED', position: 'Import & Export Head', branch: 'Cebu', address: { detailed: 'Cebu City' }, medicalCondition: 'No' 
    },
    { 
      id: 'APP003', name: 'Pedro Reyes', firstName: 'Pedro', lastName: 'Reyes', middleInitial: 'B', 
      email: 'pedro.reyes@email.com', phone: '+63 934 567 8901', date: '01-13-2025', dob: '1998-11-10', age: 26, nationality: 'Filipino',
      status: 'HIRED', position: 'Messenger / Logistics', branch: 'Davao', address: { detailed: 'Davao City' }, medicalCondition: 'No' 
    },
    { 
      id: 'APP004', name: 'Ana Garcia', firstName: 'Ana', lastName: 'Garcia', middleInitial: 'C', 
      email: 'ana.garcia@email.com', phone: '+63 945 678 9012', date: '01-12-2025', dob: '1990-08-15', age: 34, nationality: 'Filipino',
      status: 'INTERVIEW', position: 'Documentation Head', branch: 'Manila', address: { detailed: 'Manila' }, medicalCondition: 'No' 
    },
    { 
      id: 'APP005', name: 'Jose Mendoza', firstName: 'Jose', lastName: 'Mendoza', middleInitial: 'D', 
      email: 'jose.mendoza@email.com', phone: '+63 956 789 0123', date: '01-11-2025', dob: '1993-02-28', age: 31, nationality: 'Filipino',
      status: 'INTERVIEW', position: 'Brokerage Specialist', branch: 'Cebu', address: { detailed: 'Cebu' }, medicalCondition: 'No' 
    },
    { 
      id: 'APP006', name: 'Liza Soberano', firstName: 'Liza', lastName: 'Soberano', middleInitial: 'E', 
      email: 'liza.s@email.com', phone: '+63 967 890 1234', date: '01-10-2025', dob: '1996-01-04', age: 28, nationality: 'Filipino',
      status: 'APPLIED', position: 'HR Assistant', branch: 'Manila', address: { detailed: 'Manila' }, medicalCondition: 'No' 
    },
  ];

  const positions = ['All Positions', 'Licensed Customs Broker', 'Import & Export Head', 'Documentation Head', 'Brokerage Specialist', 'Messenger / Logistics', 'HR Assistant'];
  const branches = ['All Branches', 'Manila', 'Cebu', 'Davao'];

>>>>>>> f0b5952 (jfjfj)
  const filteredData = allApplicants.filter(app => {
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter.toUpperCase();
    const matchesPosition = positionFilter === 'All Positions' || app.position === positionFilter;
    const matchesBranch = branchFilter === 'All Branches' || app.branch === branchFilter;
<<<<<<< HEAD
    
    return matchesStatus && matchesPosition && matchesBranch;
  });

  // Pagination Logic
=======
    return matchesStatus && matchesPosition && matchesBranch;
  });

>>>>>>> f0b5952 (jfjfj)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
<<<<<<< HEAD
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Reset pagination when any filter changes
=======
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

>>>>>>> f0b5952 (jfjfj)
  const updateStatus = (val) => { setStatusFilter(val); setCurrentPage(1); };
  const updatePosition = (e) => { setPositionFilter(e.target.value); setCurrentPage(1); };
  const updateBranch = (e) => { setBranchFilter(e.target.value); setCurrentPage(1); };

<<<<<<< HEAD
  return (
    <div className="applicants-container">
      <style>{`
        .applicants-container { display: flex; flex-direction: column; gap: 20px; font-family: 'Inter', sans-serif; }
        .tab-title-area { display: flex; align-items: center; gap: 12px; margin-bottom: 5px; }
        .title-icon { font-size: 1.5rem; }
        .tab-title-area h2 { font-size: 1.4rem; color: #2d3748; margin: 0; }
        
        .sub-tabs { background: white; padding: 10px; border-radius: 10px; display: flex; gap: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.03); }
        .sub-tab-btn { padding: 8px 20px; border: none; background: none; cursor: pointer; border-radius: 6px; font-weight: 500; color: #718096; transition: all 0.2s; }
        .sub-tab-btn.active { background: #5d9cec; color: white; }
        
        .table-controls { display: flex; gap: 15px; margin-top: 10px; align-items: center; }
        .search-input { flex: 2; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
        .search-input:focus { border-color: #5d9cec; }
        
        .select-wrapper { position: relative; flex: 1; }
        .filter-select { 
          width: 100%; 
          padding: 12px 16px; 
          padding-right: 40px;
          border: 1px solid #e2e8f0; 
          border-radius: 8px; 
          background: white; 
          cursor: pointer; 
          color: #4a5568; 
          font-size: 0.9rem;
          appearance: none;
          outline: none;
        }
        .filter-select:focus { border-color: #5d9cec; }
        .select-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: #a0aec0; pointer-events: none; }
        
        .table-wrapper { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.03); display: flex; flex-direction: column; min-height: 400px; }
        .applicants-table { width: 100%; border-collapse: collapse; text-align: left; }
        .applicants-table th { background: #f8fafc; padding: 15px; font-size: 0.85rem; color: #5d9cec; border-bottom: 1px solid #e0e6ed; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .applicants-table td { padding: 15px; border-bottom: 1px solid #f0f2f5; font-size: 0.9rem; vertical-align: middle; }
        
        .bold { font-weight: 600; color: #2d3748; }
        .contact-info { font-size: 0.75rem; color: #718096; margin-bottom: 2px; }
        .status-pill { padding: 4px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 800; }
        .applied { background: #eef5ff; color: #5d9cec; }
        .interview { background: #f5f3ff; color: #a29bfe; }
        .hired { background: #ebfbf2; color: #2ecc71; }
        .rejected { background: #fff1f0; color: #e74c3c; }
        
        .action-icon { background: none; border: none; cursor: pointer; margin-right: 8px; color: #94a3b8; transition: color 0.2s; }
        .action-icon:hover { color: #5d9cec; }
        
        .pagination-container { display: flex; justify-content: space-between; align-items: center; padding: 20px 25px; background: white; border-top: 1px solid #f0f2f5; margin-top: auto; }
        .pagination-info { font-size: 0.85rem; color: #718096; }
        .pagination-controls { display: flex; align-items: center; gap: 8px; }
        .page-nav-btn { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border: 1px solid #e2e8f0; background: white; border-radius: 6px; color: #718096; cursor: pointer; transition: all 0.2s; }
        .page-nav-btn.disabled { opacity: 0.5; cursor: not-allowed; background: #f8fafc; }
        .page-number { width: 32px; height: 32px; border: 1px solid #e2e8f0; background: white; border-radius: 6px; font-size: 0.85rem; font-weight: 600; color: #718096; cursor: pointer; transition: all 0.2s; }
        .page-number.active { background: #5d9cec; border-color: #5d9cec; color: white; }
        
        .no-data { padding: 40px; text-align: center; color: #718096; font-style: italic; }
      `}</style>
      
      <div className="tab-title-area">
        <div className="title-icon">👥</div>
        <h2>Applicants</h2>
      </div>

      {/* Sorting Sub-Tabs (Status Filter) */}
      <div className="sub-tabs">
        {['All', 'Applied', 'Interview', 'Hired', 'Rejected'].map((tab) => (
          <button 
            key={tab}
            className={`sub-tab-btn ${statusFilter === tab ? 'active' : ''}`}
            onClick={() => updateStatus(tab)}
          >
            {tab} {tab !== 'All' && `(${allApplicants.filter(a => a.status === tab.toUpperCase()).length})`}
          </button>
        ))}
      </div>

      {/* Search and Dropdown Filter Bar */}
      <div className="table-controls">
        <input type="text" placeholder="Search by name or applicant number..." className="search-input" />
        
        <div className="select-wrapper">
          <select className="filter-select" value={positionFilter} onChange={updatePosition}>
            {positions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
          </select>
          <ChevronDown className="select-icon" size={18} />
        </div>

        <div className="select-wrapper">
          <select className="filter-select" value={branchFilter} onChange={updateBranch}>
            {branches.map(branch => <option key={branch} value={branch}>{branch}</option>)}
          </select>
          <ChevronDown className="select-icon" size={18} />
        </div>
      </div>

      {/* Applicants Table */}
=======
  const handleViewApplicant = (applicant) => { setSelectedApplicant(applicant); };
  const closeModal = () => { setSelectedApplicant(null); };

  const tabs = ['All', 'Applied', 'Interview', 'Hired', 'Rejected'];

  return (
    <div className="applicants-container">
      {/* Header */}
      <div className="tab-title-area">
        <div className="title-icon">
          <Users size={24} strokeWidth={2.5} />
        </div>
        <h2>Applicants</h2>
      </div>

      {/* Top Navigation Tabs */}
      <div className="top-tabs-card">
        {tabs.map((tab, index) => {
          const count = tab === 'All' ? '' : ` (${allApplicants.filter(a => a.status === tab.toUpperCase()).length})`;
          return (
            <React.Fragment key={tab}>
              <button 
                className={`tab-btn ${statusFilter === tab ? 'active' : ''}`}
                onClick={() => updateStatus(tab)}
              >
                {tab}{count}
              </button>
              {index < tabs.length - 1 && <span className="tab-divider">|</span>}
            </React.Fragment>
          );
        })}
      </div>

      {/* Search and Filters */}
      <div className="filters-card">
        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search by name or applicant number" className="search-input" />
        </div>
        
        <div className="select-wrapper">
          <Briefcase className="select-left-icon" size={18} />
          <select className="filter-select" value={positionFilter} onChange={updatePosition}>
            {positions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
          </select>
          <ChevronDown className="select-right-icon" size={16} />
        </div>

        <div className="select-wrapper">
          <MapPin className="select-left-icon" size={18} />
          <select className="filter-select" value={branchFilter} onChange={updateBranch}>
            {branches.map(branch => <option key={branch} value={branch}>{branch}</option>)}
          </select>
          <ChevronDown className="select-right-icon" size={16} />
        </div>
      </div>

      {/* Table */}
>>>>>>> f0b5952 (jfjfj)
      <div className="table-wrapper">
        <table className="applicants-table">
          <thead>
            <tr>
              <th>Applicant Number</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Position</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((app) => (
                <tr key={app.id}>
                  <td className="bold">{app.id}</td>
                  <td className="bold">{app.name}</td>
                  <td>
<<<<<<< HEAD
                    <div className="contact-info">📧 {app.email}</div>
                    <div className="contact-info">📞 {app.phone}</div>
=======
                    <div className="contact-wrapper">
                      <div className="contact-info"><Mail className="contact-icon" size={14} /> {app.email}</div>
                      <div className="contact-info"><Phone className="contact-icon" size={14} /> {app.phone}</div>
                    </div>
>>>>>>> f0b5952 (jfjfj)
                  </td>
                  <td>{app.date}</td>
                  <td>
                    <span className={`status-pill ${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                  <td>{app.position}</td>
                  <td>{app.branch}</td>
                  <td className="actions">
<<<<<<< HEAD
                    <button className="action-icon"><Eye size={18} /></button>
                    <button className="action-icon"><Download size={18} /></button>
=======
                    <button className="action-icon" onClick={() => handleViewApplicant(app)}>
                      <Eye size={18} />
                    </button>
                    <button className="action-icon">
                      <Download size={18} />
                    </button>
>>>>>>> f0b5952 (jfjfj)
                  </td>
                </tr>
              ))
            ) : (
<<<<<<< HEAD
              <tr>
                <td colSpan="8" className="no-data">No applicants found matching these filters.</td>
              </tr>
=======
              <tr><td colSpan="8" className="no-data">No applicants found.</td></tr>
>>>>>>> f0b5952 (jfjfj)
            )}
          </tbody>
        </table>

<<<<<<< HEAD
        {/* Functional Pagination Section */}
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="pagination-controls">
            <button 
              className={`page-nav-btn ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={18} />
            </button>
            
            {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
              <button 
                key={index + 1}
                className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button 
              className={`page-nav-btn ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <ChevronRight size={18} />
=======
        {/* Pagination */}
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} applicants
          </div>
          <div className="pagination-controls">
            <button className="page-nav-text" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <ChevronLeft size={16} /> Previous
            </button>
            {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
              <button key={index + 1} className={`page-number ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
            <button className="page-nav-text" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0}>
              Next <ChevronRight size={16} />
>>>>>>> f0b5952 (jfjfj)
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Modal - Unchanged but functional */}
      {selectedApplicant && (
        <div className="app-modal-overlay" onClick={closeModal}>
          <div className="app-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="app-modal-header">
              <div className="app-modal-title-area">
                <h3>Applicant Details</h3>
                <p className="app-modal-subtitle">{selectedApplicant.name} - {selectedApplicant.id}</p>
              </div>
              <button className="app-modal-close-btn" onClick={closeModal}><X size={24} /></button>
            </div>
            {/* Modal Body goes here - kept standard based on original file */}
          </div>
        </div>
      )}

      {/* --- APPLICANT DETAILS MODAL (Scoped Classes) --- */}
      {selectedApplicant && (
        <div className="app-modal-overlay" onClick={closeModal}>
          <div className="app-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="app-modal-header">
              <div className="app-modal-title-area">
                <h3>Applicant Details</h3>
                <p className="app-modal-subtitle">{selectedApplicant.name} - Applicant Number: {selectedApplicant.id}</p>
              </div>
              <button className="app-modal-close-btn" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            <div className="app-modal-body">
              
              {/* Personal Information */}
              <div className="app-detail-section">
                <div className="app-section-header">
                  <User size={20} className="app-section-icon" />
                  <span className="app-section-title">Personal Information</span>
                </div>
                
                <div className="app-info-grid">
                  <div className="app-info-item"><span className="app-info-label">First Name</span><span className="app-info-value">{selectedApplicant.firstName}</span></div>
                  <div className="app-info-item"><span className="app-info-label">Middle Initial</span><span className="app-info-value">{selectedApplicant.middleInitial}</span></div>
                  
                  <div className="app-info-item"><span className="app-info-label">Last Name</span><span className="app-info-value">{selectedApplicant.lastName}</span></div>
                  <div className="app-info-item"><span className="app-info-label">Date of Birth</span><span className="app-info-value">{selectedApplicant.dob}</span></div>

                  <div className="app-info-item"><span className="app-info-label">Age</span><span className="app-info-value">{selectedApplicant.age}</span></div>
                  <div className="app-info-item"><span className="app-info-label">Nationality</span><span className="app-info-value">{selectedApplicant.nationality}</span></div>

                  <div className="app-info-item"><span className="app-info-label">Email</span><span className="app-info-value">{selectedApplicant.email}</span></div>
                  <div className="app-info-item"><span className="app-info-label">Phone</span><span className="app-info-value">{selectedApplicant.phone}</span></div>

                  <div className="app-info-item"><span className="app-info-label">Branch</span><span className="app-info-value">{selectedApplicant.branch.split(' ')[0]}</span></div>
                  <div className="app-info-item"><span className="app-info-label">Position Applied</span><span className="app-info-value">{selectedApplicant.position}</span></div>
                </div>

                <div className="app-detail-section" style={{marginTop: '30px'}}>
                   <h4 className="app-subsection-title">Address</h4>
                   <div className="app-address-grid">
                      <div className="app-info-item"><span className="app-info-label">Region</span><span className="app-info-value">{selectedApplicant.address?.region || 'N/A'}</span></div>
                      <div className="app-info-item"><span className="app-info-label">Province</span><span className="app-info-value">{selectedApplicant.address?.province || 'N/A'}</span></div>
                      <div className="app-info-item"><span className="app-info-label">City/Municipality</span><span className="app-info-value">{selectedApplicant.address?.city || 'N/A'}</span></div>
                      <div className="app-info-item"><span className="app-info-label">Barangay</span><span className="app-info-value">{selectedApplicant.address?.barangay || 'N/A'}</span></div>
                      <div className="app-info-item" style={{ gridColumn: 'span 2' }}><span className="app-info-label">Detailed Address</span><span className="app-info-value">{selectedApplicant.address?.detailed}</span></div>
                   </div>
                </div>
              </div>

              {/* Documents */}
              <div className="app-detail-section">
                <div className="app-section-header">
                  <FileText size={20} className="app-section-icon" />
                  <span className="app-section-title">Documents</span>
                </div>
                <div className="app-doc-list">
                  
                  {/* Resume */}
                  <div className="app-doc-card">
                    <div className="app-doc-info">
                      <div className="app-doc-icon-box"><FileText size={24} /></div>
                      <div className="app-doc-details">
                        <span className="app-doc-type">Resume</span>
                        <span className="app-doc-name">{`${selectedApplicant.firstName}_${selectedApplicant.lastName}_Resume.pdf`}</span>
                      </div>
                    </div>
                    <div className="app-doc-actions">
                      <button className="app-btn-view" onClick={() => handleViewDocument('Resume.pdf')}><Eye size={16} /> View</button>
                      <button className="app-btn-download" onClick={() => handleDownloadDocument('Resume.pdf')}><Download size={16} /> Download</button>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="app-doc-card">
                    <div className="app-doc-info">
                      <div className="app-doc-icon-box"><FileText size={24} /></div>
                      <div className="app-doc-details">
                        <span className="app-doc-type">Cover Letter</span>
                        <span className="app-doc-name">{`${selectedApplicant.firstName}_${selectedApplicant.lastName}_CoverLetter.pdf`}</span>
                      </div>
                    </div>
                    <div className="app-doc-actions">
                      <button className="app-btn-view" onClick={() => handleViewDocument('CoverLetter.pdf')}><Eye size={16} /> View</button>
                      <button className="app-btn-download" onClick={() => handleDownloadDocument('CoverLetter.pdf')}><Download size={16} /> Download</button>
                    </div>
                  </div>

                   {/* PRC ID */}
                   {selectedApplicant.position === 'Licensed Customs Broker' && (
                    <div className="app-doc-card">
                      <div className="app-doc-info">
                        <div className="app-doc-icon-box"><File size={24} /></div>
                        <div className="app-doc-details">
                          <span className="app-doc-type">PRC ID</span>
                          <span className="app-doc-name">{`${selectedApplicant.firstName}_${selectedApplicant.lastName}_PRC_ID.jpg`}</span>
                        </div>
                      </div>
                      <div className="app-doc-actions">
                        <button className="app-btn-view" onClick={() => handleViewDocument('PRC_ID.jpg')}><Eye size={16} /> View</button>
                        <button className="app-btn-download" onClick={() => handleDownloadDocument('PRC_ID.jpg')}><Download size={16} /> Download</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Medical Declaration */}
              <div className="app-detail-section">
                <div className="app-section-header">
                   <FileText size={20} className="app-section-icon" />
                   <span className="app-section-title">Medical Condition Declaration</span>
                </div>
                <div className="app-medical-box">
                   <div className="app-info-item">
                     <span className="app-info-label">Has Pre-existing Medical Conditions?</span>
                     <span className="app-info-value">{selectedApplicant.medicalCondition}</span>
                   </div>
                </div>
              </div>
            </div>
            <div className="app-modal-footer">
              <button className="app-btn-approve">Approve for Interview</button>
              <button className="app-btn-reject">Reject Application</button>
            </div>
          </div>
        </div>
      )}

>>>>>>> f0b5952 (jfjfj)
    </div>
  );
};

export default Applicants;