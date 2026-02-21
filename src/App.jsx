import React, { useState } from 'react';
import Login from './pages/Login';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
=======
import NavBar from './pages/NavBar'; // This is your renamed "Dashboard.jsx"
>>>>>>> f0b5952 (jfjfj)
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
<<<<<<< HEAD
  const handleLogout = () => setIsLoggedIn(false); // Clears the session

  return (
    <div className="App">
      {isLoggedIn ? 
        <Dashboard onLogout={handleLogout} /> : 
        <Login onLogin={handleLogin} />
      }
=======
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        /* Change <Dashboard /> to <NavBar /> to match your import above */
        <NavBar onLogout={handleLogout} /> 
      ) : (
        <Login onLogin={handleLogin} />
      )}
>>>>>>> f0b5952 (jfjfj)
    </div>
  );
}

export default App;