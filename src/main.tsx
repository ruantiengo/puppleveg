import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './main/pages/App'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './main/pages/Login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
