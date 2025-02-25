import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import InventoryPage from './geriatrico/page/InventoryPage'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <InventoryPage/>
    </BrowserRouter>
  </StrictMode>
)
