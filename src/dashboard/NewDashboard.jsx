import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file if you have one
import { Dashboard } from './dashboard';

const Sidebar = ({ setSelectedItem }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsSidebarOpen(false);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <div className="logo_name">Drivers App</div>
        <i className="bi bi-list" id="btn" onClick={handleToggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li onClick={() => handleItemClick('dashboard')}>Home</li>
        <li onClick={() => handleItemClick('Bluebook')}>Bluebook</li>
        <li onClick={() => handleItemClick('License')}>License</li>
        <li onClick={() => handleItemClick('View Fine')}>View Fine</li>
      </ul>
    </div>
  );
};

const DashboardSection = ({ selectedItem }) => (
  <section className="home-section">
    {selectedItem === 'dashboard' && <Dashboard />}
    {selectedItem === 'about' && <div>About Content</div>}
    {selectedItem === 'about' && <div>About Content</div>}
    {selectedItem === 'about' && <div>About Content</div>}
  
  </section>
);

const MainDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  return (
    <div className="app-container">
      <Sidebar setSelectedItem={setSelectedItem} />
      <DashboardSection selectedItem={selectedItem} />
    </div>
  );
};

export default MainDashboard;
