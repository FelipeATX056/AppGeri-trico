import React, { useState } from 'react';
import '../../css/Diagnostic.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function DiagnosticPage() {
    const [showModal, setShowModal] = useState(false);
  
    const handleSave = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <div className="main-container">
        <SideBar/>
        <div className="content">
          <PInformation/>
          <h2>Diagnóstico</h2>
          <div className="diagnostic-card">
            <div className="section">
              <label className="section-label">Registros Clínicos</label>
              <div className="subsection">
                <label className="subsection-label">Síntomas</label>
                <textarea placeholder="Ingrese los síntomas" />
              </div>
              <div className="subsection">
                <label className="subsection-label">Señales</label>
                <textarea placeholder="Ingrese las señales" />
              </div>
            </div>
            <div className="section">
              <label className="section-label">Diagnóstico Clínico</label>
              <textarea placeholder="Ingrese el diagnóstico clínico" />
            </div>
            <div className="section">
              <label className="section-label">Requisitos de Consulta</label>
              <textarea placeholder="Ingrese los requisitos de consulta" />
            </div>
            <button className="save-button" onClick={handleSave}>
              Guardar
            </button>
          </div>
  
          {/* Modal de guardar */}
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
  
  export default DiagnosticPage;