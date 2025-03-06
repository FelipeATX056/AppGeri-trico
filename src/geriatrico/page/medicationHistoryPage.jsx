import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import '../../css/medicationHistoryPage.css';
import PInformation from '../components/profile-information/PInformation';

function medicationHistoryPage() {
  const medicationData = [
    {
      date: '14/12/2026',
      medications: [
        { name: 'Acetaminofen de 500 mg tabletas', time: '8:02 AM' },
        { name: 'Losartan Tarbis 50 mg', time: '8:05 AM' },
        { name: 'Tiamina 100 mg ampolla X10 ml', time: '1:59 PM' },
        { name: 'Tiamina 100 mg ampolla X10 ml', time: '1:59 PM' },
        { name: 'Tiamina 100 mg ampolla X10 ml', time: '1:59 PM' },

      ],
    },
    {
      date: '13/12/2026',
      medications: [
        { name: 'Losartan Tarbis 50 mg', time: '8:00 AM' },
        { name: 'Tiamina 100 mg ampolla X10 ml', time: '2:01 PM' },
        { name: 'Acetaminofen de 500 mg tabletas', time: '8:02 AM' },
      ],
    },
    {
      date: '12/12/2026',
      medications: [
        { name: 'Losartan Tarbis 50 mg', time: '8:03 AM' },
        { name: 'Tiamina 100 mg ampolla X10 ml', time: '2:04 PM' },
        { name: 'Losartan Tarbis 50 mg', time: '8:05 AM' },
        { name: 'Acetaminofen de 500 mg tabletas', time: '8:02 AM' },
      ],
    },
  ];

  return (
    <div className="main-container">
      <SideBar />
      <div className="content">
        <PInformation/>
        <div className="animate__animated animate__fadeInUp">
        <h2>Historial de Medicamentos</h2>
        <div className="medication-history">
          {medicationData.map((item, index) => (
            <div key={index} className="medication-day">
              <div className="medication-date">{item.date}</div>
              {item.medications.map((med, medIndex) => (
                <div key={medIndex} className="medication-item">
                  <span className="medication-name">{med.name}</span>
                  <span className="medication-time">{med.time}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default medicationHistoryPage;