import React from 'react';
import './Aboutme.css';

const AboutMe = ({ darkMode }) => {
  return (
    <>
      <main id='aboutme' className={darkMode ? 'dark-mode' : ''}>

        <section className="about-container">
          <h2>Introduction</h2>
          <h1>About Me</h1>
          <div className="profile-section">
            <img
              src="https://img.freepik.com/free-photo/man-with-camera-yellow-scene_23-2148184797.jpg?ga=GA1.1.635744474.1739200844&semt=ais_hybrid&w=740"
              alt="Profile Picture"
              className="profile-image"
              loading="lazy"
            />
            <div className="bio">
              <p>
              Hello! I am Nikhil I am a passionate software developer with a love for building modern, efficient, and visually appealing web applications. With expertise in React, Next.js, and frontend technologies, I strive to create fast and user-friendly digital experiences.
              </p>
            
              <div className="info-boxes">
            <div className="info-box">
              <img src="school .svg"/>
              <h4>Education</h4>
              <p>Masters of Computer Applications</p>
            </div>
            <div className="info-box">
            <img src="code.svg"/>
              <h4>Languages</h4>
              <p>HTML,CSS,Javascript,React Js,Next Js</p>
            </div>
            <div className="info-box">
            <img src="large-suitcase.svg"/>
              <h4>Projects</h4>
              <p>Portfolio Website, E-commerce App</p>
            </div>
          </div>

          <div className="tools-section">
                <h4>Tools I Use</h4>
                <div className="tools-container">
                  <img src="visual-studio.svg" alt="VS Code" className="tool-image" />
                  <img src="git.svg" alt="Git" className="tool-image" />
                  <img src="colab.svg" alt="Google Colab" className="tool-image" />
                  <img src="bootstrap.svg" alt="Bootstrap" className="tool-image" />
                  <img src="react.svg" alt="React" className="tool-image" />
                  <img src="next-js.svg" alt="Nextjs" className="tool-image" />
                  <img src="javascript-js.svg" alt="Javascript" className="tool-image" />
                  {/* Add more tools as needed */}
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default function Header({ darkMode, toggleDarkMode }) {
  console.log('Dark Mode:', darkMode); // Check if darkMode is being passed correctly 

  const handleToggleDarkMode = () => {
    console.log('Toggling Dark Mode'); // Check if the toggle function is called
    toggleDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={handleToggleDarkMode}>
        Toggle Dark Mode
      </button>
      <AboutMe darkMode={darkMode} />
    </div>
  );
}

export { AboutMe };
