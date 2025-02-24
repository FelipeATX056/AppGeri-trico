import React, { useState } from 'react';
import "../../../css/SideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faUser, faChevronDown, faStethoscope, faChartLine, faNotesMedical, faPills, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSubMenu = (buttonId) => {
    if (!subMenuOpen[buttonId]) {
      closeAllSubMenus();
    }
    setSubMenuOpen((prev) => ({ ...prev, [buttonId]: !prev[buttonId] }));
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const closeAllSubMenus = () => {
    setSubMenuOpen({});
  };

  return (
    <div>
      <nav id="sidebar" className={sidebarOpen ? '' : 'close'}>
        <ul>
          <li>
            <span className="logo">Logo</span>
            <button onClick={toggleSidebar} id="toggle-btn" className={sidebarOpen ? '' : 'rotate'}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
          </li>
          <li>
            <button onClick={() => toggleSubMenu('perfil')} className={`dropdown-btn ${subMenuOpen['perfil'] ? 'rotate' : ''}`}>
              <FontAwesomeIcon icon={faUser} />
              <span>Perfil</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul className={`sub-menu ${subMenuOpen['perfil'] ? 'show' : ''}`}>
              <div>
                <li><a href="#">Inventario</a></li>
              </div>
            </ul>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faStethoscope} />
              <span>Diagnóstico</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} />
              <span>Recomendaciones</span>
            </a>
          </li>
          <li>
            <button onClick={() => toggleSubMenu('informes')} className={`dropdown-btn ${subMenuOpen['informes'] ? 'rotate' : ''}`}>
              <FontAwesomeIcon icon={faNotesMedical} />
              <span>Informes de Enfermería</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul className={`sub-menu ${subMenuOpen['informes'] ? 'show' : ''}`}>
              <div>
                <li><a href="#">Informes de Psicología</a></li>
                <li><a href="#">Informe de médico</a></li>
              </div>
            </ul>
          </li>
          <li>
            <button onClick={() => toggleSubMenu('medicamentos')} className={`dropdown-btn ${subMenuOpen['medicamentos'] ? 'rotate' : ''}`}>
              <FontAwesomeIcon icon={faPills} />
              <span>Medicamentos y horarios</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul className={`sub-menu ${subMenuOpen['medicamentos'] ? 'show' : ''}`}>
              <div>
                <li><a href="#">Medicamentos Suministrados</a></li>
              </div>
            </ul>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHandHoldingHeart} />
              <span>Cuidados</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
