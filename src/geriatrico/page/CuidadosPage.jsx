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
        <h2>Cuidados de enfermería</h2>
        <div className="cuidado-card">
          <div className="cuidado-item">
            <span>Baño de paciente</span>
            <div className="options">
              <label>
                <input type="checkbox" /> Cama
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Ducha
              </label>
            </div>
          </div>
          <div className="cuidado-item">
            <span>Toma de signos vitales</span>
            <div className="options">
              <label>
                <input type="checkbox" /> PA
              </label>
              <label>
                <input type="checkbox" /> FC
              </label>
              <label>
                <input type="checkbox" defaultChecked /> FR
              </label>
              <label>
                <input type="checkbox" /> T
              </label>
            </div>
          </div>
          <div className="cuidado-item">
            <span>Control Peso</span>
            <input type="checkbox" />
          </div>
          <div className="cuidado-item">
            <span>Control Glusemia</span>
            <input type="checkbox" />
          </div>
          <div className="cuidado-item">
            <span>Líquidos Administrativos</span>
            <input type="checkbox" />
          </div>
          <div className="cuidado-item">
            <span>Control de XXXX</span>
            <input type="checkbox" />
          </div>
          <div className="cuidado-item">
            <span>Administrar medicamentos</span>
            <input type="checkbox" defaultChecked />
          </div>
          <button className="save-button" onClick={handleSave}>Guardar</button>
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
