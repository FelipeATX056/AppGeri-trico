import React from 'react';
import '../../css/Inventory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills, faBox } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';

function InventoryPage() {

  const inventoryData = [
    {
      name: 'Acetaminofén de 500 mg',
      presentation: 'Caja',
      unitsPerPresentation: 20,
      description: 'Analgésico y antipirético',
      availableUnits: 16,
      icon: faPills,
    },
    {
      name: 'Diclofenaco sódico 75 mg ampolla',
      presentation: 'Ampolla',
      unitsPerPresentation: 1,
      description: 'Antiinflamatorio no esteroideo',
      availableUnits: 4,
      icon: faPills,
    },
    {
      name: 'Pañales Adulto',
      presentation: 'Paquete',
      unitsPerPresentation: 10,
      description: 'Absorbentes para adultos',
      availableUnits: 1,
      icon: faBox,
    },
  ];

  return (
    <div className="main-container">
      <SideBar /> {/* Renderiza el Sidebar aquí */}
      <div className="content">
        <PInformation /> {/* Renderiza el PerfilInformación aquí */}
        <div className="animate__animated animate__fadeInUp">
          <h2>Inventario</h2>
          <div className="inventory">
            <div className="inventory-card">
              {inventoryData.map((item, index) => (
                <div key={index} className="inventory-item">
                  <div className="inventory-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-description"  title='descripción'>{item.description}</span>
                    <span className="item-presentation" title='presentación'>Presentación: {item.presentation}</span>
                    <span className="item-units-per-presentation">Unidades por presentación: {item.unitsPerPresentation}</span>
                  </div>
                  <div className="inventory-info">
                    <span className="available-units">Disponibles: {item.availableUnits}</span>
                    <div className="icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;
