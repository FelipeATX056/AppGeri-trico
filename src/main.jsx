import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import DiagnosticPage from './geriatrico/page/DiagnosticPage'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <DiagnosticPage/>
    </BrowserRouter>
  </StrictMode>
)
