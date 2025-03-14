
import '../../css/GestionarUsuarios.css';
import SideBar from '../components/SideBar/SideBar';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';


function GestionarUsuarioPage() {
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);
  
    const handleSearch = () => {
      if (searchValue.trim() === '') {
        setShowModal(true);
      } else {
        console.log('Buscando:', searchValue);
      }
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const userData = {
      name: 'Juan Andres Gomez Ruiz',
      id: '1072963222',
      role: 'Paciente'
    };
  
    return (
      <div className="main-container">
        <SideBar />
        <div className="content-area">
          <h2 className="gestionar-title">Gestionar Usuario</h2>
  
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar por Cédula..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input-field"
            />
            <button className="search-btn" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} /> Buscar
            </button>
          </div>
  
          <div className="user-card-container">
            <div className="user-icon-container">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
            </div>
            <div className="user-details">
              <div className="user-name">{userData.name}</div>
              <div className="user-id">{userData.id}</div>
              <div className="user-role">{userData.role}</div>
            </div>
            <button title="ver información" className="info-button">
            <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '25px' }} />

            </button>
          </div>
  
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <p>Por favor, ingrese una cédula para realizar la búsqueda.</p>
                <button className="close-modal" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default GestionarUsuarioPage;