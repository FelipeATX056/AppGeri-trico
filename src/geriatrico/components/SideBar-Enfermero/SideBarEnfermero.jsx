import React, { useState } from 'react';
import "../../../css/SideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleDoubleLeft, faHistory, faLocationArrow, faUser, faCalendarCheck, faClipboard
} from '@fortawesome/free-solid-svg-icons';

function SideBarEnfermero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="main-container">
      <div className="animate__animated animate__fadeInLeft">
        <nav id="sidebar" className={sidebarOpen ? '' : 'close'}>
          <ul>
            <li>
              <img src="/Logo-Fundacion.png" alt="Logo" className="logo" />
              <button onClick={toggleSidebar} id="toggle-btn" className={sidebarOpen ? '' : 'rotate'}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </button>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUser} />
                <span>Perfil</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCalendarCheck} />
                <span>Cuadro de Turnos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faClipboard} />
                <span>Bitácoras</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon />
                <span>xxx</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon />
                <span>xxx</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Contenedor del contenido principal */}
        <div className="content">
        </div>
      </div>
    </div>
  );
}

export default SideBarEnfermero;
