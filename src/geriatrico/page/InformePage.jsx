import React, { useState } from 'react';
import '../../css/Informe.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';


function InformePage() {
    const [reportText, setReportText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setReportText(event.target.value);
  };

  // Datos del perfil
  const profileData = {
    name: 'Juan Andres Gomez Ruiz',
    id: '1072963222',
    location: 'Popayán-Cauca Colombia',
  };

  return (
    <div className="main-container">
      <SideBar />
      <div className="content">
        <PInformation/>
        <div className="report-header">
          <h2>Informe de Enfermería</h2>
          <div className="report-date">19/12/2024</div>
        </div>
        <textarea
          className="report-content"
          value={reportText}
          onChange={handleChange}
          placeholder="Escribe tu informe aquí..."
        />
        <button className="save-button" onClick={handleSave}>Guardar</button>

        {/* Modal de guardar */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>¿Está seguro de guardar el informe?</p>
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
export default InformePage;
