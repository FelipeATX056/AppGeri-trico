import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GeriatricoApp } from './GeriatricoApp'
import { BrowserRouter } from 'react-router-dom'
// import HomeGeneral from './geriatrico/page/HomeGeneral'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <GeriatricoApp/>
    </BrowserRouter>
  </StrictMode>
)
