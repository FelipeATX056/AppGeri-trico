import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import SideBarEnfermero from '../components/SideBar-Enfermero/SideBarEnfermero';
import '../../css/CuadroTurnos.css';

function CuadroTurnosPage() {
  const [showModal, setShowModal] = useState(false);
  const [bitacoraTexto, setBitacoraTexto] = useState('');
  const turnosData = [
    {
      dia: 'Lunes',
      fechaInicio: '21/10/2026',
      fechaFin: '21/10/2026',
      turnoDia: '08:00 AM - 02:00 PM',
      turnoNoche: '05:00 PM - 09:00 PM',
      horasTrabajadas: '8:30 Horas',
    },
    {
      dia: 'Miércoles',
      fechaInicio: '23/10/2026',
      fechaFin: '23/10/2026',
      turnoDia: '08:00 AM - 02:00 PM',
      turnoNoche: '05:00 PM - 09:00 PM',
      horasTrabajadas: '8:30 Horas',
    },
    {
      dia: 'Viernes',
      fechaInicio: '25/10/2026',
      fechaFin: '25/10/2026',
      turnoDia: '08:00 AM - 02:00 PM',
      turnoNoche: '05:00 PM - 09:00 PM',
      horasTrabajadas: '8:30 Horas',
    }
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGuardarBitacora = () => {
    console.log(bitacoraTexto);
    setShowModal(false);
  };

  return (
    <div className="main-container">
      <SideBarEnfermero />
      <div className="content turnos-content">
        <h1>Cuadro de Turnos</h1>
        <div className="turnos-grid">
          {turnosData.map((turno, index) => (
            <div key={index} className="turnos-card">
              <div className="turnos-header">
                <h2>{turno.dia}</h2>
                <p>{turno.fechaInicio} - {turno.fechaFin}</p>
                <button className="bitacora-button" onClick={handleShowModal}>
                  <FontAwesomeIcon icon={faEdit} /> Bitácora
                </button>
              </div>
              <div className="actividades-grid">
                <div className="actividad-item">
                  <FontAwesomeIcon icon={faSun} />
                  <span>{turno.turnoDia}</span>
                </div>
                <div className="actividad-item">
                  <FontAwesomeIcon icon={faMoon} />
                  <span>{turno.turnoNoche}</span>
                </div>
              </div>
              <div className="resumen-turnos">
                <p><strong>{turno.horasTrabajadas}</strong> Trabajadas</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Bitácora */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Bitácora de Enfermería</h2>
              <textarea
                value={bitacoraTexto}
                onChange={(e) => setBitacoraTexto(e.target.value)}
                placeholder="Ingrese detalles de la bitácora..."
                className="bitacora-textarea"
              />
              <div className="modal-buttons">
                <button className="cancel" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button className="confirm" onClick={handleGuardarBitacora}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CuadroTurnosPage;
