import React, { useState } from 'react';
import '../../css/Recomendaciones.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function RecomendacionesPage() {
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
        <h2>Recomendaciones</h2>
        <div className="cuidado-card">
          <div className="cuidado-item">
            <span>Lubricar Piel</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> SI
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> NO
            </div>
          </div>
          <div className="cuidado-item">
            <span>Asistir Alimentacion</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> SI
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> NO
            </div>
          </div>
          <div className="cuidado-item">
            <span>Prevencion Caidas</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>SI
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>NO
            </div>
          </div>
          <div className="cuidado-item">
            <span>Incentivar Actividad</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>SI
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>NO
            </div>
          </div>
          <div className="cuidado-item">
            <span>Actividad Fisica</span>
            <div className="options">
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label>SI
              <label className="container">
                <input type="checkbox" />
                <div className="checkmark"></div>
              </label> NO
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

export default RecomendacionesPage;
