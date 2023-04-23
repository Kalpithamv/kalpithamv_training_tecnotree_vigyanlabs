import React from 'react';

const PhotographySite = () => {
  return (
    <center>
    <div className="photography-site">
      <div className="landing-page">
        <div className="landing-page-header">
          <img src='https://us.123rf.com/450wm/heckmannoleg/heckmannoleg2301/heckmannoleg230100002/196852188-silhouette-of-photographer-on-top-of-mountain-at-sunset-background-nature-photographer-in-the.jpg?ver=6' alt="Photography" className="header-image" />
          <h1 className="header-title">Friends Photography</h1>
        </div>
        <div className="landing-page-content">
          <p className="content-description">
            Welcome to our photography site! We offer professional photography services for all occasions, including weddings, birthdays, and corporate events.
          </p>
          <button className="content-button" onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}>View Our Work</button>
        </div>
      </div>
      <div className="images-section">
        <h2 className="section-title">Our Work</h2>
        <div className="image-gallery">
          <img src="https://www.shutterstock.com/image-photo/two-glasses-champagne-260nw-454113289.jpg" alt="Image 1" className="gallery-image" /> <br></br>
          <img src="https://shotkit.com/wp-content/uploads/2021/01/nature-photography.jpg" alt="Image 2" className="gallery-image" />
          <img src="https://www.linaandtom.com/wp-content/uploads/2020/04/Gaynes-Park-Wedding-Photography-1024x683.jpg" alt="Image 3" className="gallery-image" />
          <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8&w=1000&q=80" alt="Image 4" className="gallery-image" />
        </div>
      </div>
      <div className="footer">
        <p className="footer-contact">Contact us at Friends photography@gmail.com</p>
      </div>
    </div>
    </center>
  );
};

export default PhotographySite;