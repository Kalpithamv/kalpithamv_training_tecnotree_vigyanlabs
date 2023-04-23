/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from 'react';


const ELearningSite = () => {
  return (
    <div className="e-learning-site">
      <header className="site-header">
        <h1 className="site-title">E-Learning Education Platform</h1>
        <nav className="site-navigation">
          <ul className="navigation-list">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="site-main">
        <section className="hero-section">
          <h2 className="hero-title">Learn from the comfort of your own home</h2>
          <p className="hero-description">Our online courses are designed to fit your schedule and your budget. Enroll today and start learning!</p>
          <button className="hero-button">View Courses</button>
        </section>
        <section className="featured-courses-section">
          <h2 className="section-title">Featured Courses</h2>
          <div className="course-cards">
            <div className="course-card">
              <img src='https://www.indiaeve.com/images/events/Event324381214Img.jpg' alt="Course 1" className="course-image" />
              <h3 className="course-title">Introduction to React</h3>
              <p className="course-description">Learn the basics of React and start building modern web applications.</p>
              <button className="course-button">Enroll Now</button>
            </div>
            <div className="course-card">
              <img src="course2.jpg" alt="Course 2" className="course-image" />
              <h3 className="course-title">JavaScript for Beginners</h3>
              <p className="course-description">Discover the fundamentals of JavaScript and take your coding skills to the next level.</p>
              <button className="course-button">Enroll Now</button>
            </div>
            <div className="course-card">
              <img src="course3.jpg" alt="Course 3" className="course-image" />
              <h3 className="course-title">Python Programming</h3>
              <p className="course-description">Master Python and learn how to build powerful applications for any industry.</p>
              <button className="course-button">Enroll Now</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p className="footer-text">Copyright © 
          {new Date().getFullYear()} E-Learning Education Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ELearningSite;



