import React, { useState } from 'react';
import '../../css/Seguimiento.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function SeguimientoPage() {
  const [showModal, setShowModal] = useState(false);

  // Estados para Baño del paciente
  const [bañoPacienteCama, setBañoPacienteCama] = useState('');
  const [bañoPacienteDucha, setBañoPacienteDucha] = useState('');
  const [camaSeleccionada, setCamaSeleccionada] = useState(false);
  const [duchaSeleccionada, setDuchaSeleccionada] = useState(false);

  // Estados para Toma de signos vitales
  const [signosVitalesHorario, setSignosVitalesHorario] = useState('');
  const [signosVitalesPA, setSignosVitalesPA] = useState('');
  const [signosVitalesFC, setSignosVitalesFC] = useState('');
  const [signosVitalesFR, setSignosVitalesFR] = useState('');
  const [signosVitalesT, setSignosVitalesT] = useState('');
  const [horarioSeleccionadoSignos, setHorarioSeleccionadoSignos] = useState(false);

  // Estados para Control de peso
  const [controlPesoHorario, setControlPesoHorario] = useState('');
  const [controlPeso, setControlPeso] = useState('');
  const [horarioSeleccionadoPeso, setHorarioSeleccionadoPeso] = useState(false);

  // Estados para Control de posición
  const [controlPosicionHorario, setControlPosicionHorario] = useState('');
  const [controlPosicion, setControlPosicion] = useState('');
  const [horarioSeleccionadoPosicion, setHorarioSeleccionadoPosicion] = useState(false);

  // Estados para Control de glicemia
  const [controlGlucemiaHorario, setControlGlucemiaHorario] = useState('');
  const [controlGlucemia, setControlGlucemia] = useState('');
  const [horarioSeleccionadoGlucemia, setHorarioSeleccionadoGlucemia] = useState(false);

  // Estados para Líquidos administrados
  const [liquidosAdminSuero, setLiquidosAdminSuero] = useState('');
  const [liquidosAdminOtros, setLiquidosAdminOtros] = useState('');

  // Estados para Curaciones
  const [curaciones, setCuraciones] = useState('');

  // Estados para Administración de medicamentos
  const [medicamentosChecked, setMedicamentosChecked] = useState(false);
  const [detalleMedicamento, setDetalleMedicamento] = useState('');

  // Funciones para manejar cambios en los horarios
  const handleHorarioChangeSignos = (e) => {
    setSignosVitalesHorario(e.target.value);
    setHorarioSeleccionadoSignos(e.target.value !== '');
  };

  const handleHorarioChangePeso = (e) => {
    setControlPesoHorario(e.target.value);
    setHorarioSeleccionadoPeso(e.target.value !== '');
  };

  const handleHorarioChangePosicion = (e) => {
    setControlPosicionHorario(e.target.value);
    setHorarioSeleccionadoPosicion(e.target.value !== '');
  };

  const handleHorarioChangeGlucemia = (e) => {
    setControlGlucemiaHorario(e.target.value);
    setHorarioSeleccionadoGlucemia(e.target.value !== '');
  };

  // Función para manejar el cambio de baño del paciente
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

  // Función para guardar los datos
  const handleSave = () => {
    console.log({
      bañoPacienteCama,
      bañoPacienteDucha,
      signosVitales: {
        horario: signosVitalesHorario,
        PA: signosVitalesPA,
        FC: signosVitalesFC,
        FR: signosVitalesFR,
        T: signosVitalesT,
      },
      controlPeso: {
        horario: controlPesoHorario,
        peso: controlPeso,
      },
      controlPosicion: {
        horario: controlPosicionHorario,
        posicion: controlPosicion,
      },
      controlGlucemia: {
        horario: controlGlucemiaHorario,
        glucemia: controlGlucemia,
      },
      liquidosAdminSuero,
      liquidosAdminOtros,
      curaciones,
      medicamentosChecked,
      detalleMedicamento,
    });
    setShowModal(true);
  };

  return (
    <div className="main-container">
      <SideBar />
      <div className="content">
        <PInformation />
        <h2>Cuidados de enfermería</h2>
        <div className="cuidado-card">

          {/* Baño del paciente */}
          <div className="cuidado-item">
            <h3>Baño del paciente</h3>
            <div className="options">
              <div className="field-group">
                <label>Cama:</label>
                <select value={bañoPacienteCama} onChange={handleCamaChange}>
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <div className="field-group">
                <label>Ducha:</label>
                <select value={bañoPacienteDucha} onChange={handleDuchaChange}>
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
                <label>Horario:</label>
                <select value={signosVitalesHorario} onChange={handleHorarioChangeSignos}>
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <div className="field-group">
                <label>Presión Arterial (PA):</label>
                <input type="text" value={signosVitalesPA} onChange={(e) => setSignosVitalesPA(e.target.value)} disabled={!horarioSeleccionadoSignos} placeholder="Ingrese valor" />
              </div>
              <div className="field-group">
                <label>Frecuencia Cardiaca (FC):</label>
                <input type="text" value={signosVitalesFC} onChange={(e) => setSignosVitalesFC(e.target.value)} disabled={!horarioSeleccionadoSignos} placeholder="Ingrese valor" />
              </div>
              <div className="field-group">
                <label>Frecuencia Respiratoria (FR):</label>
                <input type="text" value={signosVitalesFR} onChange={(e) => setSignosVitalesFR(e.target.value)} disabled={!horarioSeleccionadoSignos} placeholder="Ingrese valor" />
              </div>
              <div className="field-group">
                <label>Temperatura (T):</label>
                <input type="text" value={signosVitalesT} onChange={(e) => setSignosVitalesT(e.target.value)} disabled={!horarioSeleccionadoSignos} placeholder="Ingrese valor" />
              </div>
            </div>
          </div>

          {/* Control de peso */}
          <div className="cuidado-item">
            <h3>Control de peso</h3>
            <div className="options">
              <div className="field-group">
                <label>Horario:</label>
                <select value={controlPesoHorario} onChange={handleHorarioChangePeso}>
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <div className="field-group">
                <label>Peso:</label>
                <input type="text" value={controlPeso} onChange={(e) => setControlPeso(e.target.value)} disabled={!horarioSeleccionadoPeso} placeholder="Ingrese peso" />
              </div>
            </div>
          </div>

          {/* Control de posición */}
          <div className="cuidado-item">
            <h3>Control de posición</h3>
            <div className="options">
              <div className="field-group">
                <label>Horario:</label>
                <select value={controlPosicionHorario} onChange={handleHorarioChangePosicion}>
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <div className="field-group">
                <label>Posición:</label>
                <input type="text" value={controlPosicion} onChange={(e) => setControlPosicion(e.target.value)} disabled={!horarioSeleccionadoPosicion} placeholder="Ingrese posición" />
              </div>
            </div>
          </div>

          {/* Control de glicemia */}
          <div className="cuidado-item">
            <h3>Control de glicemia</h3>
            <div className="options">
              <div className="field-group">
                <label>Horario:</label>
                <select value={controlGlucemiaHorario} onChange={handleHorarioChangeGlucemia}>
                  <option value="">Seleccione</option>
                  <option value="mañana">Mañana</option>
                  <option value="tarde">Tarde</option>
                  <option value="noche">Noche</option>
                </select>
              </div>
              <div className="field-group">
                <label>Valor de glicemia:</label>
                <input type="text" value={controlGlucemia} onChange={(e) => setControlGlucemia(e.target.value)} disabled={!horarioSeleccionadoGlucemia} placeholder="Ingrese valor" />
              </div>
            </div>
          </div>

          {/* Líquidos administrados */}
          <div className="cuidado-item">
            <h3>Líquidos administrados</h3>
            <div className="options">
              <div className="field-group">
                <label>Suero:</label>
                <input type="text" value={liquidosAdminSuero} onChange={(e) => setLiquidosAdminSuero(e.target.value)} placeholder="Ingrese cantidad" />
              </div>
              <div className="field-group">
                <label>Otros:</label>
                <input type="text" value={liquidosAdminOtros} onChange={(e) => setLiquidosAdminOtros(e.target.value)} placeholder="Ingrese detalles" />
              </div>
            </div>
          </div>

          {/* Curaciones */}
          <div className="cuidado-item">
            <h3>Curaciones</h3>
            <div className="options">
              <div className="field-group">
                <label>Descripción:</label>
                <textarea value={curaciones} onChange={(e) => setCuraciones(e.target.value)} placeholder="Ingrese detalles de las curaciones" />
              </div>
            </div>
          </div>

          {/* Administración de medicamentos */}
          <div className="cuidado-item">
            <h3>Administración de medicamentos</h3>
            <div className="options">
              <div className="field-group">
                <label>Medicamentos administrados:</label>
                <input type="checkbox" checked={medicamentosChecked} onChange={() => setMedicamentosChecked(!medicamentosChecked)} />
                <input type="text" value={detalleMedicamento} onChange={(e) => setDetalleMedicamento(e.target.value)} disabled={!medicamentosChecked} placeholder="Ingrese detalles" />
              </div>
            </div>
          </div>

          {/* Botón Guardar */}
          <button title="Haz clic aquí para enviar el formulario" className="save-button" onClick={handleSave}>
            Guardar
          </button>

        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>¿Está seguro de guardar los cambios?</p>
              <div className="modal-buttons">
                <button className="confirm" onClick={() => setShowModal(false)}>
                  Sí
                </button>
                <button className="cancel" onClick={() => setShowModal(false)}>
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
