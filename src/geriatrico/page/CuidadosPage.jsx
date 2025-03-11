import React, { useState } from 'react';
import '../../css/Cuidados.css';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function CuidadoPage() {
  const [showModal, setShowModal] = useState(false);
  const [medicamentosChecked, setMedicamentosChecked] = useState(false);
  const [detalleMedicamento, setDetalleMedicamento] = useState("");

  const handleCheckboxChange = () => {
    setMedicamentosChecked((prev) => !prev);
    if (medicamentosChecked) {
      setDetalleMedicamento(""); // Limpia el campo si se deselecciona
    }
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
        <PInformation />
        <div className="animate__animated animate__fadeInUp">
          <h2>Cuidados de enfermería</h2>
          <div className="cuidado-card">

            {/* Baño de paciente */}
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

            {/* Toma de signos vitales */}
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

            {/* Control de peso */}
            <div className="cuidado-item">
              <span>Control de peso</span>
              <div className="options">
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label> Mañana
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label> Tarde
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label> Noche
              </div>
            </div>

            {/* Control de posición */}
            <div className="cuidado-item">
              <span>Control de posición</span>
              <div className="options">
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label>
              </div>
            </div>

            {/* Control de glucemia */}
            <div className="cuidado-item">
              <span>Control de glucemia</span>
              <div className="options">
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label>
              </div>
            </div>

            {/* Líquidos Administrados */}
            <div className="cuidado-item">
              <span>Líquidos Administrados</span>
              <div className="options">
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label>
              </div>
            </div>

            {/* Curaciones */}
            <div className="cuidado-item">
              <span>Curaciones</span>
              <div className="options">
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label>
              </div>
            </div>

            {/* Administrar medicamentos */}
            <div className="cuidado-item">
              <span>Administrar medicamentos</span>
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

export default CuidadoPage;
