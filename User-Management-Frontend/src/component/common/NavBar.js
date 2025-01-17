import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './NavBar.css'; // Add custom styles here

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Update the body class based on the theme
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} mb-4`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    User Management
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="view-students">
                                View Students
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="add-students">
                                Add Student
                            </Link>
                        </li>
                    </ul>
                    <button
                        className="btn toggle-btn d-flex align-items-center"
                        onClick={toggleTheme}
                    >
                        {isDarkMode ? (
                            <FaSun size={20} className="icon" />
                        ) : (
                            <FaMoon size={20} className="icon" />
                        )}
                        <span className="ms-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
