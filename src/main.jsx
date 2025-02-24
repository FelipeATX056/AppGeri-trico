import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import SideBar from './geriatrico/components/SideBar/SideBar'
// import SearchBar from './geriatrico/components/Search/SearchBar'
// import AsignarRol from './geriatrico/components/Asignar-Rol/AsignarRol'
// import { GeriatricoApp } from './GeriatricoApp'
// import AdminDashboard from './geriatrico/page/AdminDashboard'
// import TarjetaSedes from './geriatrico/components/Tarjetas-Sedes/TarjetasSedes'
// import HomeGeneral from './geriatrico/page/HomeGeneral'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SideBar/>
    </BrowserRouter>
  </StrictMode>
)
