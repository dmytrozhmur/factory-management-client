import { useState } from 'react'
import './App.css'
import BaseContent from './components/BaseContent'
import MainPageLayout from './routes/MainPageLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ActivistPageLayout from './routes/ActivistPageLayout'
import AdminPageLayout from './routes/AdminPageLayout'
import EmployeePageLayout from './routes/EmployeePageLayout'
import AdminDashboard from './components/AdminDashboard'
import FactoriesDashboard from './components/FactoriesDashboard'
import ProfileDashboard from './components/ProfileDashboard'
import SettingsMenu from './components/SettingsMenu'
import CreateFactoryModal from './components/CreateFactoryModal'
import CreateAdminModal from './components/CreateAdminModal'

const router = createBrowserRouter([
      {
        path: '/admin',
        element: <AdminPageLayout Content={<BaseContent />} />
      },
      {
        path: '/admin/accounts',
        element: <AdminPageLayout Content={<AdminDashboard />} />
      },
      {
        path: '/admin/accounts/create',
        element: <AdminPageLayout Content={<CreateAdminModal />} />
      },
      {
        path: '/admin/factories',
        element: <AdminPageLayout Content={<FactoriesDashboard />} />
      },
      {
        path: '/admin/factories/create',
        element: <AdminPageLayout Content={<CreateFactoryModal />} />
      },
      {
        path: '/admin/profile',
        element: <AdminPageLayout Content={<ProfileDashboard />} />
      },
      {
        path: '/admin/setting',
        element: <AdminPageLayout Content={<SettingsMenu />} />
      },
      {
        path: '/activist', 
        element: <ActivistPageLayout Content={<BaseContent />} />
      },
      {
        path: '/employee', 
        element: <EmployeePageLayout Content={<BaseContent />} />
      }
    ])

function App() {
  const [count, setCount] = useState(0)

  return (
      <RouterProvider router={router} />

    // <body>
    //   <div>
    //     <MenuPanel />
    //     <BaseContent />
    //  <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   </div>
    // </body>
    
  )
}

export default App