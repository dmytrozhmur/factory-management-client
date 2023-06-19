import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminMenuPanel from './components/AdminMenuPanel.jsx'
import ActivistMenuPanel from './components/ActivistMenuPanel.jsx'
import EmployeeMenuPanel from './components/EmployeeMenuPanel.jsx'
import MainPageLayout from './routes/MainPageLayout.jsx'

// const router = createBrowserRouter([
//   {path: '/admin', element: <MainPageLayout MenuPanel={<AdminMenuPanel />} />},
//   {path: '/activist', element: <ActivistMenuPanel />},
//   {path: '/employee', element: <EmployeeMenuPanel />}
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
