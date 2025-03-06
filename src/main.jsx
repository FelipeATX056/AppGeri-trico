import { StrictMode } from 'react'
import 'animate.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import MedicationHistoryPage from './geriatrico/page/medicationHistoryPage'
import ProfileInformation from './geriatrico/page/profileInformationPage';
// import DiagnosticPage from './geriatrico/page/DiagnosticPage';
// import InventoryPage from './geriatrico/page/InventoryPage';






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ProfileInformation/>
    </BrowserRouter>
  </StrictMode>
)
