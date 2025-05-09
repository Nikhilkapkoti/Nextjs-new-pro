import React from 'react';
import './Header.css'; // Ensure the path is correct

export default function Header({ darkMode, toggleDarkMode }) {
  console.log('Dark Mode:', darkMode); // Check if darkMode is being passed correctly 

  const handleToggleDarkMode = () => {
    console.log('Toggling Dark Mode'); // Check if the toggle function is called
    toggleDarkMode(!darkMode);
  };

  return (
    <main id='header' className={darkMode ? 'dark-mode' : ''}> {/* Apply dark-mode class conditionally */}
      <div className="container">
        {/* Add your image here */}
        <img src="https://img.freepik.com/free-photo/portrait-fashionable-boy-drinking-within-frame_23-2148184623.jpg?ga=GA1.1.635744474.1739200844&semt=ais_hybrid&w=740" alt="Profile" className="header-image" />
        <h2>Hi, I'm Nikhil</h2>
        <h1>fullstack web developer </h1>
        <h1>based in Dheradun.</h1>
        <p>I'm a web designer crafting modern and responsive websites.</p>
        <div className="button-group">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="#resume" className="btn btn-secondary" download="Nikhil Kapkoti resume.pdf">Download My Resume</a>
        </div>
      </div>
    </main>
  );
}
