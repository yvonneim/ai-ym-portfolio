import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

/**
 * Main App component
 * Wraps the entire application with ThemeProvider and renders layout components
 */
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          {/* Hero Section */}
          <section id="home" className="hero-section">
            <div className="hero-container">
              <h1 className="hero-title">Welcome to My Portfolio</h1>
              <p className="hero-subtitle">
                Showcasing my projects, skills, and experiences
              </p>
              <button className="cta-button">Get Started</button>
            </div>
          </section>

          {/* Placeholder Section - Replace with your content */}
          <section id="about" className="content-section">
            <div className="section-container">
              <h2>About Me</h2>
              <p>
                This is a placeholder section. Replace this with your own content,
                projects showcase, skills, or any other information you'd like to display.
              </p>
            </div>
          </section>

          <section id="projects" className="content-section">
            <div className="section-container">
              <h2>Projects</h2>
              <p>
                Your projects will be displayed here. Add your portfolio pieces,
                case studies, or any work you'd like to showcase.
              </p>
            </div>
          </section>

          <section id="contact" className="content-section">
            <div className="section-container">
              <h2>Contact</h2>
              <p>
                Get in touch! Add a contact form or your preferred contact methods here.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
