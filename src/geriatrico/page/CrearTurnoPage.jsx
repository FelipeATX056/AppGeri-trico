import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import SideBarEnfermero from '../components/SideBar-Enfermero/SideBarEnfermero';
import '../../css/CrearTurno.css';

function CrearTurnoPage() {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [turnoDia, setTurnoDia] = useState('');
  const [turnoNoche, setTurnoNoche] = useState('');
  const [horasTrabajadas, setHorasTrabajadas] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCrearTurno = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGuardarTurno = () => {
    console.log({
      dia,
      fechaInicio,
      fechaFin,
      turnoDia,
      turnoNoche,
      horasTrabajadas,
      enfermero,
    });
    setShowModal(false);
  };

  return (
    <div className="main-container">
      <SideBarEnfermero />
      <div className="content crear-turno-content">
        <h1><FontAwesomeIcon icon={faCalendarDay} /> Crear Turno</h1>
        <div className="crear-turno-form-container">
          <form className="crear-turno-form">
            <div className="form-group">
              <label><FontAwesomeIcon icon={faCalendarDay} /> Fecha Inicio:</label>
              <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faCalendarDay} /> Fecha Fin:</label>
              <input
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faClock} /> Turno Día:</label>
              <input
                type="text"
                value={turnoDia}
                onChange={(e) => setTurnoDia(e.target.value)}
                placeholder="Ej: 08:00 AM - 02:00 PM"
              />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faClock} /> Turno Noche:</label>
              <input
                type="text"
                value={turnoNoche}
                onChange={(e) => setTurnoNoche(e.target.value)}
                placeholder="Ej: 05:00 PM - 09:00 PM"
              />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faClock} /> Horas Trabajadas:</label>
              <input
                type="text"
                value={horasTrabajadas}
                onChange={(e) => setHorasTrabajadas(e.target.value)}
                placeholder="Ej: 8:30 Horas"
              />
            </div>
            <button className="crear-turno-button" onClick={handleCrearTurno}>
              Asignar Turno
            </button>
          </form>
        </div>

        {/* Modal de Confirmación */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Confirmar Creación de Turno</h2>
              <p>¿Está seguro de crear el turno?</p>
              <div className="modal-buttons">
                <button className="cancel" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button className="confirm" onClick={handleGuardarTurno}>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CrearTurnoPage;
