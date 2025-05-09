'use client';
import React, { useState } from 'react';
import './Projects.css';



export default function Projects() {
  return (
    <>
      <main id='projects'> 
        <section className='proj'>
          <h2>My Projects</h2>
          <h1>My Latest Work</h1>
          <h3>Welcome to my Web Development portfolio! Explore a collection of projects showcasing my expertise in web development </h3>
        </section>         
             
        <section className="projects-container">
  <div className="pogo-box">
    <img src="https://img.freepik.com/premium-vector/voice-assistant-concept-artificial-intelligence-wave-microphone-control-sound-recognition_653980-38.jpg" alt="Project Image"/>
    <div className="overlay">
      <h4>Voice Assistant</h4>
      <p>AI Interface</p>
      <a href="https://github.com/Nikhilkapkoti/voice-assistant-project-" target="_blank" rel="noopener noreferrer" className="action-button"><img src="code.svg"/></a>  {/* New Button */}
    </div>
  </div>
  <div className="pogo-box">
    <img src="https://media.istockphoto.com/id/1446486926/vector/front-and-back-end-of-development-responsive-web-design-website-interface-coding-and.jpg?s=2048x2048&w=is&k=20&c=J3yYL19Q3jptFXP926WObIA1vq_w4btg7VNmVUvBUT0=" alt="Project Image"/>
    <div className="overlay">
      <h4>Web Development</h4>
      <p>Responsive Design</p>
      <a href="https://github.com/Nikhilkapkoti/Landing-page-for-websites" target="_blank" rel="noopener noreferrer" className="action-button"><img src="code.svg"/></a>  {/* New Button */}
    </div>
  </div>
  <div className="pogo-box">
    <img src="https://media.istockphoto.com/id/636803022/photo/news-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=Gd0ekneVn1-NRgmk-gSHohLXUclMIfO4o2-lwxjg0qA=" alt="Project Image"/>
    <div className="overlay">
      <h4>News Portal</h4>
      <p>Latest Updates</p>
      <a href="https://github.com/Nikhilkapkoti/project_newswesit_sportsdunia_project_" target="_blank" rel="noopener noreferrer" className="action-button"><img src="code.svg"/></a>  {/* New Button */}
    </div>
  </div>
  <div className="pogo-box">
    <img src="https://media.istockphoto.com/id/2194870166/photo/nurse-helping-out-senior-male-with-dementia-play-with-tic-tac-toe.jpg?s=612x612&w=0&k=20&c=PsRw_tqunSl7NYWCogdaNTKKETfM3612kq566DWKh8E=" alt="Project Image"/>
    <div className="overlay">
      <h4>Tic Tac Toe</h4>
      <p>Interactive Game</p>
      <a href="https://github.com/Nikhilkapkoti/TicTacToe-game" target="_blank" rel="noopener noreferrer" className="action-button"><img src="code.svg"/></a>  {/* New Button */}
    </div>
  </div>
</section>

        <div className="btt">
          <a href="https://github.com/Nikhilkapkoti?tab=repositories" target="_blank" rel="noopener noreferrer" className="bttn">Show More</a>
          </div>
      </main>
    </>
  );
}

