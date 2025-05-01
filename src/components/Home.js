import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';
import anshik from '../assets/image1.jpeg';
import leetcode from '../assets/leetcode.png';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Web Developer',
        'Android Developer',
        'React Native Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="section-container">
        <div className="home-content">
          <div className="profile-container">
            <img src={anshik} alt="Anshik" className="profile-image" />
          </div>
          <div className="home-text">
            <h1 className="main-title">
              <h3>Hello, I'm</h3> <span className="highlight rainbow-text">Anshik Patel</span>
            </h1>
            <div className="typing-container">
              I'm a <span ref={typedRef} className="highlight"></span>
            </div>
            <p className="description">
            A tech enthusiast pursuing B.Tech in Computer Science and Engineering, with a solid foundation in full-stack development using the MERN stack, PHP, and C++. Passionate about creating seamless digital experiences, blending logic with creativity. Always eager to explore, experiment, and grow in the ever-evolving world of software development.
            
            </p>
          </div>

          <div className="cta-container">
            <div className="cta-buttons">
              <a
                href="https://drive.google.com/file/d/1SqjkGhiVHT57yElSv-lIjRU9SxGhUfzJ/view?usp=drive_link"  // Replace with your actual CV URL
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
                <i className="fas fa-file-alt ms-2"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/14WFyFDP6fV29SeaMXnV3r-efGfsZOSyO/view?usp=drive_link"  // Replace with your actual Video CV URL
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video CV
                <i className="fas fa-video ms-2"></i>
              </a>
            </div>
          </div>

          <div className="social-links-container">
            <div className="social-links">
              <a
                href="https://github.com/AnshikPatel"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="social-link github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anshik-patel-967058196/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="social-link linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:anshikpatel16aug@gmail.com"
                title="Email"
                className="social-link email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="tel:+918295545738"
                title="Phone"
                className="social-link phone"
              >
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="https://leetcode.com/u/anshik16/"  // Replace with your actual LeetCode profile URL
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="social-link leetcode"
              >
                <img src={leetcode} alt="LeetCode" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
