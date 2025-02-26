import React from 'react';
import '../../css/Inventory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills, faBox } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/SideBar/SideBar';
import PInformation from '../components/profile-information/PInformation';


  function InventoryPage() {
    // Datos del inventario
    const inventoryData = [
      { name: 'Acetaminofén de 500 mg', quantity: 16, icon: faPills },
      { name: 'Diclofenaco sódico 75 mg ampolla', quantity: 4, icon: faPills },
      { name: 'Pañales Adulto', quantity: 1, icon: faBox },
    ];
  
    return (
      <div className="main-container">
        <SideBar /> {/* Renderiza el Sidebar aquí */}
        <div className="content">
        <PInformation/> {/* Renderiza el PerfilInfomracion aquí */}
          <h2>Inventario</h2>
          <div className="inventory">
            <div className="inventory-card">
              {inventoryData.map((item, index) => (
                <div key={index} className="inventory-item">
                  <div className="inventory-details">
                    <span>{item.name}</span>
                  </div>
                  <div className="inventory-info">
                    <span className="quantity">cant {item.quantity}</span>
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
    );
  }
  
  export default InventoryPage;