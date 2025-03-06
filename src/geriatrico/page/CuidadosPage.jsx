import React, { useState } from 'react';
import '../../css/Cuidados.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function CuidadoPage() {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    
    <div className="main-container">
      <SideBar />
      <div className="content">
        <PInformation/>
        <div className="animate__animated animate__fadeInUp">
        <h2>Cuidados de enfermería</h2>
        <div className="cuidado-card">
          <div className="cuidado-item">
            <span>Baño de paciente</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> Cama
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> Ducha
            </div>
          </div>
          <div className="cuidado-item">
            <span>Toma de signos vitales</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> PA
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> FC
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> FR
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> T
            </div>
          </div>
          <div className="cuidado-item">
            <span>Control de peso</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>      
            </div>
          </div>
          <div className="cuidado-item">
            <span>Control de glusemia</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>
            </div>
          </div>
          <div className="cuidado-item">
            <span>Líquidos Administrativos</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>
            </div>
          </div>
          <div className="cuidado-item">
            <span>Control de XXXX</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> Opción 1
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> Opción 2
            </div>
          </div>
          <div className="cuidado-item">
            <span>Administrar medicamentos</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" defaultChecked />
                <div className="checkmark"></div>
              </label> Rutinario
            </div>
          </div>
          <button className="save-button" onClick={handleSave}>Guardar</button>
        </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>¿Está seguro de guardar los cambios?</p>
              <div className="modal-buttons">
                <button className="confirm" onClick={handleCloseModal}>
                  Sí
                </button>
                <button className="cancel" onClick={handleCloseModal}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CuidadoPage;
