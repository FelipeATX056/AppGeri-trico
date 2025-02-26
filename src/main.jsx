import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CuidadoPage from './geriatrico/page/CuidadosPage'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <CuidadoPage/>
    </BrowserRouter>
  </StrictMode>
)
