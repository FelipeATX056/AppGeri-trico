import React, { useState } from "react";
import { AiOutlineClose, AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import SideBarEnfermero from '../components/SideBar-Enfermero/SideBarEnfermero';
import '../../css/UsuariosGeneral.css';

const UsuariosGeneral = () => {
  const [activeTab, setActiveTab] = useState("Geriatrico 1");
  const [activeSede, setActiveSede] = useState("Sede Alfonso Lopez");
  const [activeRol, setActiveRol] = useState("Enfermero");
  const [showModal, setShowModal] = useState(false);
  const [cedulaBusqueda, setCedulaBusqueda] = useState('');

  const person = {
    id: 1,
    name: "Juan Pérez",
    cedula: "12345678",
    direccion: "Calle 123, Sector Central",
    telefono: "1234567890",
    geriatricos: [
      {
        nombre: "Geriatrico 1",
        sedes: [
          {
            nombre: "Sede Alfonso Lopez",
            roles: [
              {
                tipo: "Enfermero",
                fechaInicio: "2025-02-15",
                fechaFin: "2025-03-15",
                activo: true
              },
              {
                tipo: "Administrador",
                fechaInicio: "2025-02-20",
                fechaFin: null,
                activo: true
              }
            ]
          },
          {
            nombre: "Sede Central",
            roles: [
              {
                tipo: "Paciente",
                fechaInicio: "2025-03-01",
                fechaFin: null,
                activo: false
              }
            ]
          }
        ]
      },
      {
        nombre: "Geriatrico 2",
        sedes: [
          {
            nombre: "Sede Norte",
            roles: [
              {
                tipo: "Enfermero",
                fechaInicio: "2025-01-10",
                fechaFin: "2025-02-10",
                activo: false
              },
              {
                tipo: "Paciente",
                fechaInicio: "2025-01-15",
                fechaFin: null,
                activo: true
              }
            ]
          }
        ]
      }
    ]
  };

  const handleGeriatricoChange = (geriatricoNombre) => {
    setActiveTab(geriatricoNombre);
    const geriatrico = person.geriatricos.find(g => g.nombre === geriatricoNombre);
    setActiveSede(geriatrico?.sedes[0]?.nombre || "");
    setActiveRol(geriatrico?.sedes[0]?.roles[0]?.tipo || "");
  };

  const handleSedeChange = (sedeNombre) => {
    setActiveSede(sedeNombre);
    const geriatrico = person.geriatricos.find(g => g.nombre === activeTab);
    const sede = geriatrico?.sedes.find(s => s.nombre === sedeNombre);
    setActiveRol(sede?.roles[0]?.tipo || "");
  };

  const handleRolChange = (rolTipo) => {
    setActiveRol(rolTipo);
  };

  const getRolInfo = () => {
    if (!activeTab || !activeSede || !activeRol) return null;
    const geriatrico = person.geriatricos.find(g => g.nombre === activeTab);
    const sede = geriatrico?.sedes.find(s => s.nombre === activeSede);
    const rol = sede?.roles.find(r => r.tipo === activeRol);
    return rol;
  };

  const rolInfo = getRolInfo();

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBuscarCedula = (e) => {
    setCedulaBusqueda(e.target.value);
  };

  return (
    <div className="main-container">
      <SideBarEnfermero />
      <div className="content usuarios-general-content">
        <h1>Persona Registrada</h1>

        <div className="search-bar">
          <input
            type="text"
            value={cedulaBusqueda}
            onChange={handleBuscarCedula}
            placeholder="Buscar por cédula..."
          />
        </div>

        <div className="card-grid">
          <div className="person-card" onClick={handleCardClick}>
            <div className="card-header">
              <BiUserCircle className="profile-icon" />
              <div className="card-info">
                <h3>{person.name}</h3>
                <p><strong>Cedula:</strong>{person.cedula}</p>
                <p><strong>Teléfono:</strong> {person.telefono}</p>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-header">
                <h2>{person.name}</h2>
                <button
                  className="close-btn"
                  onClick={handleCloseModal}
                >
                  <AiOutlineClose />
                </button>
              </div>

              <div className="tabs-container">
                {/* Geriatricos Tabs */}
                <div className="geriatrico-tabs">
                  {person.geriatricos.map((geriatrico) => (
                    <button
                      key={geriatrico.nombre}
                      className={`geriatrico-tab ${activeTab === geriatrico.nombre ? 'active' : ''}`}
                      onClick={() => handleGeriatricoChange(geriatrico.nombre)}
                    >
                      {geriatrico.nombre}
                    </button>
                  ))}
                </div>

                {/* Sedes Tabs */}
                {activeTab && (
                  <div className="sede-tabs">
                    {person.geriatricos
                      .find(g => g.nombre === activeTab)?.sedes
                      .map(sede => (
                        <button
                          key={sede.nombre}
                          className={`sede-tab ${activeSede === sede.nombre ? 'active' : ''}`}
                          onClick={() => handleSedeChange(sede.nombre)}
                        >
                          {sede.nombre}
                        </button>
                      ))}
                  </div>
                )}

                {/* Roles Tabs */}
                {activeSede && (
                  <div className="role-tabs">
                    {person.geriatricos
                      .find(g => g.nombre === activeTab)?.sedes
                      .find(s => s.nombre === activeSede)?.roles
                      .map(rol => (
                        <button
                          key={rol.tipo}
                          className={`role-tab ${activeRol === rol.tipo ? 'active' : ''}`}
                          onClick={() => handleRolChange(rol.tipo)}
                        >
                          {rol.tipo}
                        </button>
                      ))}
                  </div>
                )}

                {/* Rol Details */}
                {rolInfo && (
                  <div className="role-details">
                    <div className="detail-card">
                      <h4>Información del Rol</h4>
                      <p><strong>Geriatrico:</strong> {activeTab}</p>
                      <p><strong>Sede:</strong> {activeSede}</p>
                      <p><strong>Rol:</strong> {rolInfo.tipo}</p>
                      <p><strong>Fecha de Inicio:</strong> {rolInfo.fechaInicio}</p>
                      <p><strong>Fecha de Fin:</strong> {rolInfo.fechaFin || 'N/A'}</p>
                      <p>
                        <strong>Activo:</strong>{" "}
                        {rolInfo.activo ? (
                          <AiFillCheckCircle className="active-icon" />
                        ) : (
                          <AiFillCloseCircle className="inactive-icon" />
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default UsuariosGeneral;
