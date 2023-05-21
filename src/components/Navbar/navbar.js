import React, { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">     
      <h5> <strong> SCHOOL OF ESSENTIAL ENABLERS & ENTREPRENEURSHIP</strong> <br></br> <span>स्कूल ऑफ एसेंशियल इनेबलर्स एंड एंटरप्रेन्योरशिप</span> <br></br></h5>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
           <strong>   Home</strong>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
             <strong> About</strong> <FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/about/seee" className="dropdown-link">
                 <strong> About SEEE</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/about/admistration" className="dropdown-link">
                  <strong>Admistration</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/about/connect with us" className="dropdown-link">
                  <strong>Connect with Us</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
             <strong> Team</strong> <FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/team/faculty" className="dropdown-link">
                 <strong> Faculty</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/team/courses" className="dropdown-link">
                  <strong>courses</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/team/activity" className="dropdown-link">
                  <strong>activity</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong>Program</strong><FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/program/courses" className="dropdown-link">
                  <strong>Courses (MBA)</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/program/Application Form" className="dropdown-link">
                  <strong>Application Form</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/program/free structure" className="dropdown-link">
                  <strong>Fee Structure</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/program/Tranning" className="dropdown-link">
                  <strong>Tranning</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
            <strong></strong>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
