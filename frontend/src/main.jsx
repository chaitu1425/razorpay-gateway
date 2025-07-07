import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Payment from './components/Payment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Payment/>
  </StrictMode>,
)
