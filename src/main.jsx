import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { GeriatricoApp } from './GeriatricoApp'
import { BrowserRouter } from 'react-router-dom'
import AdminDashboard from './geriatrico/page/AdminDashboard'
// import TarjetaSedes from './geriatrico/components/Tarjetas-Sedes/TarjetasSedes'
// import HomeGeneral from './geriatrico/page/HomeGeneral'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <AdminDashboard/>
    </BrowserRouter>
  </StrictMode>
)
