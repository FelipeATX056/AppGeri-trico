import React, { useState } from 'react';
import '../../css/Seguimiento.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function SeguimientoPage() {
    const [showModal, setShowModal] = useState(false);
  const [bañoPacienteCama, setBañoPacienteCama] = useState('');
  const [bañoPacienteDucha, setBañoPacienteDucha] = useState('');
  const [camaSeleccionada, setCamaSeleccionada] = useState(false);
  const [duchaSeleccionada, setDuchaSeleccionada] = useState(false);
  const [signosVitalesPA, setSignosVitalesPA] = useState('');
  const [signosVitalesFC, setSignosVitalesFC] = useState('');
  const [signosVitalesFR, setSignosVitalesFR] = useState('');
  const [signosVitalesT, setSignosVitalesT] = useState('');
  const [controlPeso, setControlPeso] = useState('');
  const [controlPosicion, setControlPosicion] = useState('');
  const [controlGlucemia, setControlGlucemia] = useState('');
  const [liquidosAdminSuero, setLiquidosAdminSuero] = useState('');
  const [liquidosAdminOtros, setLiquidosAdminOtros] = useState('');
  const [curaciones, setCuraciones] = useState('');
  const [medicamentosChecked, setMedicamentosChecked] = useState(false);
  const [detalleMedicamento, setDetalleMedicamento] = useState('');

  const handleCheckboxChange = () => {
    setMedicamentosChecked((prev) => !prev);
    if (medicamentosChecked) {
      setDetalleMedicamento(""); // Limpia el campo si se deselecciona
    }
  };

  const handleCamaChange = (e) => {
    setBañoPacienteCama(e.target.value);
    setCamaSeleccionada(true);
    setDuchaSeleccionada(false);
    setBañoPacienteDucha('');
  };

  const handleDuchaChange = (e) => {
    setBañoPacienteDucha(e.target.value);
    setDuchaSeleccionada(true);
    setCamaSeleccionada(false);
    setBañoPacienteCama('');
  };

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

          {/* Baño de paciente */}
          <div className="cuidado-item">
            <h3>Baño de paciente</h3>
            <div className="options">
              <div className="field-group">
                <label>Cama:</label>
                <select
                  value={bañoPacienteCama}
                  onChange={handleCamaChange}
                  disabled={duchaSeleccionada}
                >
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <div className="field-group">
                <label>Ducha:</label>
                <select
                  value={bañoPacienteDucha}
                  onChange={handleDuchaChange}
                  disabled={camaSeleccionada}
                >
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Toma de signos vitales */}
          <div className="cuidado-item">
            <h3>Toma de signos vitales</h3>
            <div className="options">
              <div className="field-group">
                <label>Presión Arterial (PA):</label>
                <input
                  type="text"
                  value={signosVitalesPA}
                  onChange={(e) => setSignosVitalesPA(e.target.value)}
                  placeholder="Ingrese valor"
                />
              </div>
              <div className="field-group">
                <label>Frecuencia Cardiaca (FC):</label>
                <input
                  type="text"
                  value={signosVitalesFC}
                  onChange={(e) => setSignosVitalesFC(e.target.value)}
                  placeholder="Ingrese valor"
                />
              </div>
              <div className="field-group">
                <label>Frecuencia Respiratoria (FR):</label>
                <input
                  type="text"
                  value={signosVitalesFR}
                  onChange={(e) => setSignosVitalesFR(e.target.value)}
                  placeholder="Ingrese valor"
                />
              </div>
              <div className="field-group">
                <label>Temperatura (T):</label>
                <input
                  type="text"
                  value={signosVitalesT}
                  onChange={(e) => setSignosVitalesT(e.target.value)}
                  placeholder="Ingrese valor"
                />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Control de peso */}
          <div className="cuidado-item">
            <h3>Control de peso</h3>
            <div className="options">
              <div className="field-group">
                <label>Peso:</label>
                <input
                  type="text"
                  value={controlPeso}
                  onChange={(e) => setControlPeso(e.target.value)}
                  placeholder="Ingrese peso"
                />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Control de posición */}
          <div className="cuidado-item">
            <h3>Control de posición</h3>
            <div className="options">
              <div className="field-group">
                <label>Posición:</label>
                <input
                  type="text"
                  value={controlPosicion}
                  onChange={(e) => setControlPosicion(e.target.value)}
                  placeholder="Ingrese posición"
                />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Control de glucemia */}
          <div className="cuidado-item">
            <h3>Control de glucemia</h3>
            <div className="options">
              <div className="field-group">
                <label>Valor de glucemia:</label>
                <input
                  type="text"
                  value={controlGlucemia}
                  onChange={(e) => setControlGlucemia(e.target.value)}
                  placeholder="Ingrese valor"
                />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Líquidos Administrados */}
          <div className="cuidado-item">
            <h3>Líquidos Administrados</h3>
            <div className="options">
              <div className="field-group">
                <label>Suero:</label>
                <input
                  type="text"
                  value={liquidosAdminSuero}
                  onChange={(e) => setLiquidosAdminSuero(e.target.value)}
                  placeholder="Ingrese cantidad"
                />
              </div>
              <div className="field-group">
                <label>Otros líquidos:</label>
                <input
                  type="text"
                  value={liquidosAdminOtros}
                  onChange={(e) => setLiquidosAdminOtros(e.target.value)}
                  placeholder="Ingrese detalles"
                />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Curaciones */}
          <div className="cuidado-item">
            <h3>Curaciones</h3>
            <div className="options">
              <div className="field-group">
                <label>Detalles de curación:</label>
                <input
                  type="text"
                  value={curaciones}
                  onChange={(e) => setCuraciones(e.target.value)}
                  placeholder="Ingrese detalles"
                />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Administrar medicamentos */}
          <div className="cuidado-item">
            <h3>Administrar medicamentos</h3>
            <div className="options">
              <label className="container">
                <input
                  type="checkbox"
                  checked={medicamentosChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="checkmark"></div>
              </label> Rutinario
            </div>

            {/* Campo de texto para detallar medicamentos */}
            {medicamentosChecked && (
              <div className="detalle-medicamento">
                <label className="block text-sm font-medium">
                  Detalle del medicamento:
                </label>
                <input
                  type="text"
                  value={detalleMedicamento}
                  onChange={(e) => setDetalleMedicamento(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                  placeholder="Ingrese detalles..."
                />
              </div>
            )}
          </div>

          {/* Botón de Guardar */}
          <button
            title="Haz clic aquí para enviar el formulario"
            className="save-button"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>

        {/* Modal de Confirmación */}
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

export default SeguimientoPage;
