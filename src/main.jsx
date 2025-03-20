import { StrictMode } from 'react'
import 'animate.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'




//Vistas Enfermero-Pacientes

// import ProfileInformation from './geriatrico/page/profileInformationPage';
// import InventoryPage from './geriatrico/page/InventoryPage';
// import DiagnosticPage from './geriatrico/page/DiagnosticPage';
// import RecomendacionesPage from './geriatrico/page/Recomendaciones';
// import InformePage from './geriatrico/page/InformePage';
// import MedicationHistoryPage from './geriatrico/page/medicationHistoryPage'
// import CuidadoPage from './geriatrico/page/CuidadosPage';
// import SeguimientoPage from './geriatrico/page/SeguimientoPage';
// import HistorialPage from './geriatrico/page/HistorialPage';
// import GestionarUsuarioPage from './geriatrico/page/GestionarUsuarios';


//Vistas Enfermero

// import CuadroTurnosPage from './geriatrico/page/CuadroTurnosPage';
import CrearTurnoPage from './geriatrico/page/CrearTurnoPage';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     
    {/* <ProfileInformation/> */}
    {/* <InventoryPage/> */}
    {/* <DiagnosticPage/> */}
    {/* <RecomendacionesPage/> */}
    {/* <InformePage/> */}
    {/* <MedicationHistoryPage/> */}
    {/* <CuidadoPage/> */}
    {/* <SeguimientoPage/> */}
    {/* <HistorialPage/> */}
    {/* <GestionarUsuarioPage/> */}

    {/* <CuadroTurnosPage/> */}
    <CrearTurnoPage/>


    </BrowserRouter>
  </StrictMode>
)
