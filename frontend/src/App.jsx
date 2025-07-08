import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Payment from './components/Payment'
import PaymentSuccess from './components/PaymentSuccess'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Payment/>}/>
      <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
      </Routes> 
    </Router>
  )
}

export default App