'use client';
import React from 'react';
import styles from './Aboutme.module.css';

const AboutMe = ({ darkMode }) => {
  return (
    <main id="aboutme" className={`${styles.aboutMain} ${darkMode ? styles.darkMode : ''}`}>
      <section className={styles.aboutContainer}>
        <h2>Introduction</h2>
        <h1>About Me</h1>
        <div className={styles.profileSection}>
          <img
            src="https://img.freepik.com/free-photo/man-with-camera-yellow-scene_23-2148184797.jpg?ga=GA1.1.635744474.1739200844&semt=ais_hybrid&w=740"
            alt="Profile Picture"
            className={styles.profileImage}
            loading="lazy"
          />
          <div className={styles.bio}>
            <p>
              Hello! I am Nikhil, a passionate software developer with a love for building modern, efficient, and visually appealing web applications. With expertise in React, Next.js, and frontend technologies, I strive to create fast and user-friendly digital experiences.
            </p>
            <div className={styles.infoBoxes}>
              <div className={styles.infoBox}>
                <img src="large-suitcase.svg" alt="Education Icon" />
                <h4>Education</h4>
                <p>Master of Computer Applications, Graphic Era Hill University - Haldwani (Aug 2023 - Aug 2025)</p>
              </div>
              <div className={styles.infoBox}>
                <img src="code.svg" alt="Languages Icon" />
                <h4>Languages</h4>
                <p>HTML, CSS, Javascript, React.Js, Next.Js</p>
              </div>
              <div className={styles.infoBox}>
                <img src="large-suitcase.svg" alt="Projects Icon" />
                <h4>Experience</h4>
                <p>Full Stack Developer Intern at Technology Business Incubator – GEU (March 2025 – Present)</p>
              </div>
            </div>
            <div className={styles.toolsSection}>
              <h4>Tools I Use :-</h4>
              <div className={styles.toolsContainer}>
                <img src="visual-studio.svg" alt="VS Code" className={styles.toolImage} />
                <img src="git.svg" alt="Git" className={styles.toolImage} />
                <img src="colab.svg" alt="Google Colab" className={styles.toolImage} />
                <img src="bootstrap.svg" alt="Bootstrap" className={styles.toolImage} />
                <img src="react.svg" alt="React" className={styles.toolImage} />
                <img src="next-js.svg" alt="Next.js" className={styles.toolImage} />
                <img src="javascript-js.svg" alt="Javascript" className={styles.toolImage} />
              </div>
            </div>
            <div className={styles.contactLinks}>
              <a href="https://linkedin.com/in/nikhil-kapkoti-9820712b8" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Nikhilkapkoti" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;