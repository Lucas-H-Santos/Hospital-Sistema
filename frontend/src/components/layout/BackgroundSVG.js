import React from 'react';
import './BackgroundSVG.css';

const BackgroundSVG = () => {
  return (
    <div className="background-container">
      {/* SVG principal de fundo com ondas coloridas */}
      <svg className="background-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="#b3e0ff" 
          fillOpacity="0.7"
          d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,69.3C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="wave wave1">
        </path>
        <path 
          fill="#4fc3f7" 
          fillOpacity="0.6"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,213.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="wave wave2">
        </path>
        <path 
          fill="#0091ea" 
          fillOpacity="0.4"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          className="wave wave3">
        </path>
      </svg>

      {/* Elementos SVG flutuantes relacionados à medicina */}
      <div className="floating-elements">
        {/* Símbolo da medicina - Caduceu */}
        <svg className="floating-element caduceus" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0077b6" d="M12,2L11,3V5.07C10.39,5.14 9.69,5.32 8.91,5.64C8.5,5.82 8.12,6 7.81,6.21C7.5,6.39 7.24,6.59 7.03,6.8C5.68,8.15 5.68,10.09 7.03,11.44V12.58L5.64,13.97L5.64,13.97L2,15L3,17L5.09,16.47L5.64,16.27V18.97L5.5,19.25L5.5,19.25L2,22L4,23L6.95,20.05L7,20L7.03,19.97L9.03,17.97L10.97,19.91L11.94,19.94L12,20L14.97,22.97L17,21L14.97,18.97L14.97,16.64L17,17L18,15L14.03,13.03L12.53,11.53V10.03C13.45,10.03 14.03,9.45 14.03,8.53C14.03,7.61 13.45,7.03 12.53,7.03C12.03,7.03 11.54,7.19 11.03,7.44V3L12,2M11.03,10.03V11.53L9.53,13.03L7.53,15.03V15.97L8.97,14.5L11.03,12.44V14.97L9.03,16.97L8.5,17.5L8.97,17.97L10.97,16.97L11.03,16.91L11.03,14.97L13.03,16.97L13.97,16.97L12,15L11.03,14.03V10.03Z" />
        </svg>

        {/* Coração pulsante */}
        <svg className="floating-element heart" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#e91e63" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>

        {/* Cruz médica */}
        <svg className="floating-element cross" width="55" height="55" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0091ea" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M11,7H9V11H5V13H9V17H11V13H15V11H11V7Z" />
        </svg>

        {/* Estetoscópio */}
        <svg className="floating-element stethoscope" width="65" height="65" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00b0ff" d="M19,8C19.56,8 20,8.43 20,9A1,1 0 0,1 19,10C18.43,10 18,9.55 18,9C18,8.43 18.43,8 19,8M2,2V11C2,13.96 4.19,16.5 7.14,16.91C7.76,19.92 10.42,22 13.5,22A6.5,6.5 0 0,0 20,15.5V11.81C21.16,11.39 22,10.29 22,9A3,3 0 0,0 19,6C17.4,6 16,7.4 16,9C16,10.29 16.84,11.4 18,11.81V15.41C18,17.91 16,19.91 13.5,19.91C11.5,19.91 9.82,18.7 9.22,16.9C12,16.3 14,13.8 14,11V2H10V5H12V11A4,4 0 0,1 8,15A4,4 0 0,1 4,11V5H6V2H2Z" />
        </svg>

        {/* Pílula */}
        <svg className="floating-element pill" width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ff5722" d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.75 4.24,15.24 4.6,16.57L10.59,10.59L14.83,14.83L18.36,11.29C19.93,9.73 19.93,7.2 18.36,5.64C16.8,4.07 14.27,4.07 12.71,5.64L5.64,12.71Z" />
        </svg>

        {/* DNA */}
        <svg className="floating-element dna" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4caf50" d="M4,2H6V4C6,5.44 6.68,6.61 7.88,7.78C8.74,8.61 9.89,9.41 11.09,10.2L9.26,11.39C8.27,10.72 7.31,10 6.5,9.21C5.07,7.82 4,6.1 4,4V2M18,2H20V4C20,6.1 18.93,7.82 17.5,9.21C16.09,10.59 14.29,11.73 12.54,12.84C10.79,13.96 9.09,15.05 7.88,16.22C6.68,17.39 6,18.56 6,20V22H4V20C4,17.9 5.07,16.18 6.5,14.79C7.91,13.41 9.71,12.27 11.46,11.16C13.21,10.04 14.91,8.95 16.12,7.78C17.32,6.61 18,5.44 18,4V2M14.74,12.61C15.73,13.28 16.69,14 17.5,14.79C18.93,16.18 20,17.9 20,20V22H18V20C18,18.56 17.32,17.39 16.12,16.22C15.26,15.39 14.11,14.59 12.91,13.8L14.74,12.61M7,3H17V4L16.94,4.5H7.06L7,4V3M7.68,6H16.32C16.08,6.34 15.8,6.69 15.42,7.06L14.91,7.5H9.07L8.58,7.06C8.2,6.69 7.92,6.34 7.68,6M9.09,16.5H14.93L15.42,16.94C15.8,17.31 16.08,17.66 16.32,18H7.68C7.92,17.66 8.2,17.31 8.58,16.94L9.09,16.5M7.06,19.5H16.94L17,20V21H7V20L7.06,19.5Z" />
        </svg>

        {/* Monitor cardíaco */}
        <svg className="floating-element monitor" width="70" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#673ab7" d="M3,13H5.79L10.1,4.79L11.28,13.75L14.5,9.66L17.25,13H21V15H16.25L13.5,11.34L9.73,16.71L8.5,7.25L5.16,13H3V13Z" />
        </svg>

        {/* Novos elementos */}

        {/* Microscópio */}
        <svg className="floating-element microscope" width="55" height="55" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009688" d="M9.46,6.28L11.05,9C8.47,9.26 6.5,11.5 6.5,14A5,5 0 0,0 11.5,19C13.55,19 15.31,17.77 16.08,16H13.5V14H21.5V16H19.25C18.84,17.57 17.97,18.96 16.79,20H19.5V22H3.5V20H6.21C4.55,18.53 3.5,16.39 3.5,14C3.5,10.37 5.96,7.2 9.46,6.28M12.74,2.07L15.84,7.38L11.26,9L8.16,3.69L12.74,2.07Z" />
        </svg>

        {/* Célula */}
        <svg className="floating-element cell" width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f44336" d="M19,16A3,3 0 0,0 22,13A3,3 0 0,0 19,10C18.4,10 17.8,10.2 17.3,10.6C17.7,9.1 17.2,7.3 15.9,6C14.6,4.7 12.8,4.2 11.3,4.6C10.9,4.1 10.3,3.9 9.7,3.9C8.8,3.9 8,4.7 8,5.6C8,6.2 8.3,6.7 8.7,7.1C8.3,8.6 8.8,10.4 10.1,11.7C10.4,12 10.8,12.3 11.2,12.5C11,13 10.9,13.5 10.9,14A3,3 0 0,0 13.9,17C14.4,17 14.9,16.9 15.4,16.7C15.7,17.1 16,17.5 16.3,17.8C17.6,19.1 19.4,19.6 20.9,19.2C21.3,19.6 21.9,19.9 22.5,19.9C23.4,19.9 24.2,19.1 24.2,18.2C24.2,17.6 23.9,17.1 23.5,16.7C23.9,15.2 23.4,13.4 22.1,12.1C21.8,11.8 21.4,11.5 21,11.3C21.2,10.8 21.3,10.3 21.3,9.8C21.3,7.8 19.7,6.2 17.7,6.2C17.2,6.2 16.7,6.3 16.2,6.5C15.9,6.1 15.6,5.7 15.3,5.4C14,4.1 12.2,3.6 10.7,4C10.3,3.6 9.7,3.3 9.1,3.3C8.2,3.3 7.4,4.1 7.4,5C7.4,5.6 7.7,6.1 8.1,6.5C7.7,8 8.2,9.8 9.5,11.1C9.8,11.4 10.2,11.7 10.6,11.9C10.4,12.4 10.3,12.9 10.3,13.4C10.3,15.4 11.9,17 13.9,17C14.4,17 14.9,16.9 15.4,16.7C15.7,17.1 16,17.5 16.3,17.8C17.6,19.1 19.4,19.6 20.9,19.2C21.3,19.6 21.9,19.9 22.5,19.9" />
        </svg>

        {/* Hospital */}
        <svg className="floating-element hospital" width="65" height="65" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1565c0" d="M2,22V7A1,1 0 0,1 3,6H7V2H17V6H21A1,1 0 0,1 22,7V22H14V17H10V22H2M9,4V10H11V8H13V10H15V4H13V6H11V4H9M4,20H8V17H4V20M4,15H8V12H4V15M16,20H20V17H16V20M16,15H20V12H16V15M10,15H14V12H10V15Z" />
        </svg>

        {/* Seringa */}
        <svg className="floating-element syringe" width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fb8c00" d="M11.15,15.18L9.73,13.77L11.15,12.35L12.56,13.77L13.97,12.35L12.56,10.94L13.97,9.53L15.39,10.94L16.8,9.53L13.97,6.7L6.9,13.77L9.73,16.6L11.15,15.18M3.08,19L6.2,15.89L4.08,13.77L13.97,3.87L16.1,6L17.5,4.58L16.1,3.16L17.5,1.75L21.75,6L20.34,7.4L18.92,6L17.5,7.4L19.63,9.53L9.73,19.42L7.61,17.3L4.5,20.42L3.08,19Z" />
        </svg>

        {/* Molécula */}
        <svg className="floating-element molecule" width="55" height="55" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9c27b0" d="M7.27,10L9,7H14.42L15.58,5L15.57,5H14.42L13.26,3H10.74L9.58,5H7.27L10.08,10H7.27M10.08,13L7.26,18H9.58L10.74,20H13.26L14.42,18H17.31L14.73,13H10.08Z" />
        </svg>

        {/* Máscara */}
        <svg className="floating-element mask" width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#03a9f4" d="M12,2C9,7 4,9 4,14C4,16 6,18 8,18C9,18 10,18 11,17C11,17 11.32,19 9,22H15C13,19 13,17 13,17C14,18 15,18 16,18C18,18 20,16 20,14C20,9 15,7 12,2Z" />
        </svg>

        {/* Partículas flutuantes - círculos animados */}
        <div className="particles">
          <div className="particle particle1"></div>
          <div className="particle particle2"></div>
          <div className="particle particle3"></div>
          <div className="particle particle4"></div>
          <div className="particle particle5"></div>
          <div className="particle particle6"></div>
          <div className="particle particle7"></div>
          <div className="particle particle8"></div>
          <div className="particle particle9"></div>
          <div className="particle particle10"></div>
          <div className="particle particle11"></div>
          <div className="particle particle12"></div>
        </div>
      </div>

      {/* Sistema de Pulsos - Elemento que simula batimentos cardíacos */}
      <div className="pulse-system">
        <div className="pulse-ring pulse1"></div>
        <div className="pulse-ring pulse2"></div>
        <div className="pulse-ring pulse3"></div>
      </div>
    </div>
  );
};

export default BackgroundSVG;
