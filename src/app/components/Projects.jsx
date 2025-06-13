'use client';
import React from 'react';
import styles from './Projects.module.css';

export default function Projects({ darkMode }) {
  return (
    <main id="projects" className={`${styles.projectsMain} ${darkMode ? styles.darkMode : ''}`}>
      <section className={styles.proj}>
        <h2>My Projects</h2>
        <h1>My Latest Work</h1>
        <h3>Welcome to my Web Development portfolio! Explore a collection of projects showcasing my expertise in web development</h3>
      </section>
      <section className={styles.projectsContainer}>
        <div className={styles.pogoBox}>
          <img src="https://www.pngitem.com/pimgs/m/191-1918871_visitor-management-systems-receptionist-visitor-management-system-hd.png" alt="Visitor Management App" />
          <div className={styles.overlay}>
            <h4>Visitor Management System</h4>
            <p>User Friendly</p>
            <a href="https://college-visitormanagement-app.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
              <img src="code.svg" alt="GitHub Code" />
            </a>
          </div>
        </div>
        <div className={styles.pogoBox}>
          <img src="https://media.istockphoto.com/id/1446486926/vector/front-and-back-end-of-development-responsive-web-design-website-interface-coding-and.jpg?s=2048x2048&w=is&k=20&c=J3yYL19Q3jptFXP926WObIA1vq_w4btg7VNmVUvBUT0=" alt="Web Development Project" />
          <div className={styles.overlay}>
            <h4>Web Development</h4>
            <p>Responsive Design</p>
            <a href="https://landing-page-for-websites-dfot.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
              <img src="code.svg" alt="GitHub Code" />
            </a>
          </div>
        </div>
        <div className={styles.pogoBox}>
          <img src="https://media.istockphoto.com/id/599780174/photo/doctor-writing-a-medical-prescription-in-hospital.jpg?s=612x612&w=0&k=20&c=Wwt-o30jqsYrJrlMCC3zPacAKfQShugu-7GkSg_0cWE=" alt="News Portal Project" />
          <div className={styles.overlay}>
            <h4>Appointment System</h4>
            <p>Advanced Booking</p>
            <a href="https://appointment-app-sage-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
              <img src="code.svg" alt="GitHub Code" />
            </a>
          </div>
        </div>
        <div className={styles.pogoBox}>
          <img src="https://media.istockphoto.com/id/2194870166/photo/nurse-helping-out-senior-male-with-dementia-play-with-tic-tac-toe.jpg?s=612x612&w=0&k=20&c=PsRw_tqunSl7NYWCogdaNTKKETfM3612kq566DWKh8E=" alt="Tic Tac Toe Project" />
          <div className={styles.overlay}>
            <h4>Tic Tac Toe</h4>
            <p>Interactive Game</p>
            <a href="https://tic-tac-toe-game-fawn-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
              <img src="code.svg" alt="GitHub Code" />
            </a>
          </div>
        </div>
      </section>
      <div className={styles.btt}>
        <a href="https://github.com/Nikhilkapkoti?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.bttn}>Show More</a>
      </div>
    </main>
  );
}