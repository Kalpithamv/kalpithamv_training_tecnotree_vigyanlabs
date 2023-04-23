import React from 'react';
import './App.css';

function App() {
return (
  <center>
<div className="app-container">
<header className="app-header">
<h1>About Me</h1>
<p className="app-description">Hi I Am Adithya </p>
</header>
<section className="app-section">
    <h2 className="app-section-header">Projects</h2>
    <ul className="app-list">
      <li className="app-list-item">
        <h3 className="app-list-item-header">Electronic Jammer</h3>
        <p className="app-list-item-description">It is implemented for destroy the electronic devices like calcultor,watch,led lights when place near to it</p>
      </li>
      <li className="app-list-item">
        <h3 className="app-list-item-header">Smart Cradle using IOT</h3>
        <p className="app-list-item-description">It is implemented to take care over the babies in all conditions</p>
      </li>
      
    </ul>
  </section>

  <section className="app-section">
    <h2 className="app-section-header">Skills</h2>
    <ul className="app-list">
    <li className="app-list-item">C++</li>
    <li className="app-list-item">C</li>
    <li className="app-list-item">Java</li>
    <li className="app-list-item">JavaScript</li>
    
    </ul>
  </section>

  <section className="app-section">
    <h2 className="app-section-header">Resume</h2>
    <a href="/path/to/resume.pdf" target="_blank" className="app-link">Download My Resume</a>
  </section>

  <section className="app-section">
    <h2 className="app-section-header">Contact</h2>
    <p className="app-contact">Contact me<a href="mailto:abc@143.com" className="app-link">abc@132001.com</a></p>
  </section>
</div>
</center>
);
}

export default App;