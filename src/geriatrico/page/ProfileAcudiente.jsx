import React from 'react';
import Sidebar from '../components/SideBar/SideBar';
import '../../css/ProfileInformation.css';

function ProfileAcudiente() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
      <div className="animate__animated animate__fadeInUp">
          <div className="info-card">
            <h2>Información Personal Acudiente</h2>
            <div className="grid-4-columns">
            <div>
                <label>Parentesco:</label>
                <input type="text" placeholder="Hijo" readOnly />
              </div>
              <div>
                <label>Nombres:</label>
                <input type="text" placeholder="Crsitian Sebastian" readOnly />
              </div>
              <div>
                <label>Apellidos:</label>
                <input type="text" placeholder="Gomez Ruiz" readOnly />
              </div>
              <div>
                <label>Fecha de nacimiento:</label>
                <input type="text" placeholder="23/06/1956" readOnly />
              </div>
              <div>
                <label>C.C:</label>
                <input type="text" placeholder="1072963222" readOnly/>
              </div>       
              <div>
                <label>Contacto:</label>
                <input type="text" placeholder="3162718887" />
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
          </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileAcudiente;