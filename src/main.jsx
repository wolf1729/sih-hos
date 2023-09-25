import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './services/routes'
//import PatientDashboard from './screens/patientDashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
