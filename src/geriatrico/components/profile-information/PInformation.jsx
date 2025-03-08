import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../../../css/PInformation.css";

function PInformation() {
  return (
    <div className="animate__animated animate__fadeInDown">
      <div className="profilee-card">
        <div className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="profile-info">
          <div className="profile-name">Juan Andres Gomes Ruiz</div>
          <div className="profile-id">10729332</div>
          <div className="profile-location">Popayán-Cauca Colombia</div>
        </div>
        <div className="button-container">
          <button className="acudiente-button">Acudiente</button>
        </div>
      </div>
    </div>
  );
}

export default PInformation;
