import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserCircle, faFileMedicalAlt, faHeartbeat, faWeight, faThermometerHalf,
    faSyringe, faStethoscope, faNotesMedical, faClock, faWind, faCalendarDay, faHeart, faLungs, faTint
  } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/SideBar/SideBar';
import '../../css/Historial.css';
import PInformation from '../components/profile-information/PInformation';

function HistorialPage() {
    // Datos de ejemplo para un día específico
    const dailyData = {
      fecha: '2025-03-14',
      resumen: {
        peso: '72 kg',
        presionArterial: '120/80 mmHg',
        frecuenciaCardiaca: '75 bpm',
        frecuenciaRespiratoria: '16 rpm',
        glucosa: '98 mg/dL',
        temperatura: '36.8°C',
        saturacionOxigeno: '98%'
      },
      eventos: [
        {
          hora: '08:00',
          tipo: 'Medición',
          detalle: 'Control de signos vitales - Valores dentro de parámetros normales'
        },
        {
          hora: '10:30',
          tipo: 'Tratamiento',
          detalle: 'Aplicación de insulina - 15 unidades'
        },
        {
          hora: '12:45',
          tipo: 'Consulta',
          detalle: 'Revisión de herida postoperatoria - Evolución favorable'
        }
      ],
      informe: {
        observaciones: 'Paciente presenta mejoría notable en niveles glucémicos. Mantener dieta y ejercicio.',
        recomendaciones: 'Continuar con Metformina 500mg cada 12 horas. Próximo control en 15 días.',
        medicamentos: [
          'Metformina 500mg - Cada 12 horas',
          'Losartán 50mg - Una vez al día'
        ]
      }
    };
  
    return (
      <div className="main-container">
        <SideBar />
        <div className="content historial-content">
        <PInformation/>
          <div className="daily-container">
            <h2><FontAwesomeIcon icon={faCalendarDay} /> {dailyData.fecha}</h2>
            
            <div className="card-grid">
              {/* Tarjeta de Resumen Diario */}
              <div className="historial-card summary-card">
                <h3><FontAwesomeIcon icon={faHeartbeat} /> Resumen del Día</h3>
                <div className="metrics-grid summary-grid">
                  <div className="metric-item">
                    <FontAwesomeIcon icon={faWeight} className="metric-icon" />
                    <span className="metric-value">{dailyData.resumen.peso}</span>
                    <span className="metric-label">Peso</span>
                  </div>
                  <div className="metric-item">
                    <FontAwesomeIcon icon={faHeartbeat} className="metric-icon" />
                    <span className="metric-value">{dailyData.resumen.presionArterial}</span>
                    <span className="metric-label">Presión Arterial</span>
                  </div>
                  <div className="metric-item">
                    <FontAwesomeIcon icon={faHeart} className="metric-icon" />
                    <span className="metric-value">{dailyData.resumen.frecuenciaCardiaca}</span>
                    <span className="metric-label">FC</span>
                  </div>
                  <div className="metric-item">
                    <FontAwesomeIcon icon={faLungs} className="metric-icon" />
                    <span className="metric-value">{dailyData.resumen.frecuenciaRespiratoria}</span>
                    <span className="metric-label">FR</span>
                  </div>
                  <div className="metric-item">
                    <FontAwesomeIcon icon={faFileMedicalAlt} className="metric-icon" />
                    <span className="metric-value">{dailyData.resumen.glucosa}</span>
                    <span className="metric-label">Glucosa</span>
                  </div>
                  <div className="metric-item">
                    <FontAwesomeIcon icon={faThermometerHalf} className="metric-icon" />
                    <span className="metric-value">{dailyData.resumen.temperatura}</span>
                    <span className="metric-label">Temperatura</span>
                  </div>
                </div>
              </div>
  
              {/* Tarjeta de línea de tiempo diaria */}
              <div className="historial-card timeline-card">
                <h3><FontAwesomeIcon icon={faClock} /> Informes del Día</h3>
                <div className="timeline-container">
                  {dailyData.eventos.map((evento, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker">
                        <FontAwesomeIcon icon={evento.icono} />
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <span className="timeline-hour">{evento.hora}</span>
                          <span className={`timeline-type ${evento.tipo.toLowerCase()}`}>
                            {evento.tipo}
                          </span>
                        </div>
                        <p className="timeline-detail">{evento.detalle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Tarjeta de Informe Médico */}
              <div className="historial-card report-card">
                <h3><FontAwesomeIcon icon={faFileMedicalAlt} /> Diagnostico</h3>
                <div className="report-section">
                  <h4><FontAwesomeIcon icon={faStethoscope} /> Observaciones</h4>
                  <p>{dailyData.informe.observaciones}</p>
                </div>
                <div className="report-section">
                  <h4><FontAwesomeIcon icon={faNotesMedical} /> Recomendaciones</h4>
                  <p>{dailyData.informe.recomendaciones}</p>
                </div>
                <div className="report-section">
                  <h4><FontAwesomeIcon icon={faSyringe} /> Medicación Prescrita</h4>
                  <ul>
                    {dailyData.informe.medicamentos.map((med, index) => (
                      <li key={index}><FontAwesomeIcon/> {med}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
    );
  }
  
  export default HistorialPage;