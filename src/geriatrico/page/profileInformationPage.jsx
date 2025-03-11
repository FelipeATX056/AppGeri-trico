import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/SideBar/SideBar';
import '../../css/ProfileInformation.css';
import PInformation from '../components/profile-information/PInformation';

function ProfileInformation() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <PInformation/>
      <div className="animate__animated animate__fadeInUp">
          <div className="info-card">
            <h2>Información Personal</h2>
            <div className="grid-4-columns">
              <div>
                <label>Nombres:</label>
                <input type="text" placeholder="Juan Andres" readOnly />
              </div>
              <div>
                <label>Apellidos:</label>
                <input type="text" placeholder="Gomez Ruiz" readOnly />
              </div>
              <div>
                <label>Género:</label>
                <input type="text" placeholder="Masculino" readOnly />
              </div>
              <div>
                <label>Fecha de nacimiento:</label>
                <input type="text" placeholder="23/06/1956" readOnly />
              </div>
              <div>
                <label>E.P.S:</label>
                <input type="text" placeholder="Nueva EPS" readOnly />
              </div>
              <div>
                <label>Nombre E.P.S:</label>
                <input type="text" placeholder="EMSSANAR" readOnly />
              </div>
              <div>
                <label>Régimen:</label>
                <input type="text" placeholder="Contributivo" readOnly />
              </div>
              <div>
                <label>C.C:</label>
                <input type="text" placeholder="1072963222" />
              </div>
              <div>
                <label>Edad:</label>
                <input type="text" placeholder="68 años" />
              </div>
             
              <div>
                <label>Contacto:</label>
                <input type="text" placeholder="3162718887" />
              </div>
              <div>
                <label>Peso:</label>
                <input type="text" placeholder="60 Kg" />
              </div>
              <div>
                <label>Grupo Sanguineo:</label>
                <input type="text" placeholder="A+" />
              </div>
              <div>
                <label>Dirección:</label>
                <input type="text" placeholder="Calle 26N 3A" />
              </div>
              <div>
                <label>Tel. Emergencia:</label>
                <input type="text" placeholder="3114528675" />
              </div>
              
            </div>
            <span className="tag">Paciente cardiovascular</span>
          </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileInformation;