import React from 'react';
import '../../css/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faLink, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  return (
    <>
      <header className="header">
        <div className="logo">LOGO</div>
        <div className="action-buttons">
          <button className="icon-button">
            <FontAwesomeIcon icon={faShareNodes} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </header>

      <main className="content-grid">
        <div className="hero-text">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Sit morbi ansagt alistan dolor sit amet consectetu</p>
        </div>

        <div className="cards-section">
          <div className="building-card">
            <div className="building-content">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <div className="buttons-group">
                <button className="button button-outline">
                  <FontAwesomeIcon icon={faPlus} /> Crear Sede
                </button>
                <button className="button button-filled">
                  <FontAwesomeIcon icon={faLink} /> Vincular Sede
                </button>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h3>Personal médico</h3>
              <div className="stat-number">40+</div>
            </div>
            <button className="add-button">
              <FontAwesomeIcon icon={faPlus} /> Agregar
            </button>
          </div>
        </div>
      </main>

      <div className="user-profile">
        <FontAwesomeIcon icon={faUser} className="user-avatar" />
        <span className="user-name">Juan Ruiz</span>
      </div>
    </>
  );
};

export default AdminDashboard;
