import { StrictMode } from 'react'
import 'animate.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


// import ProfileInformation from './geriatrico/page/profileInformationPage';
// import InventoryPage from './geriatrico/page/InventoryPage';
// import DiagnosticPage from './geriatrico/page/DiagnosticPage';
// import RecomendacionesPage from './geriatrico/page/Recomendaciones';
// import InformePage from './geriatrico/page/InformePage';
// import MedicationHistoryPage from './geriatrico/page/medicationHistoryPage'
import CuidadoPage from './geriatrico/page/CuidadosPage';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     
    {/* <ProfileInformation/> */}
    {/* <InventoryPage/> */}
    {/* <DiagnosticPage/> */}
    {/* <RecomendacionesPage/> */}
    {/* <InformePage/> */}
    {/* <MedicationHistoryPage/> */}
    <CuidadoPage/>

    </BrowserRouter>
  </StrictMode>
)
