import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './presentation/pages/Home'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './presentation/pages/Login'
import { Provider } from 'react-redux'
import { store } from './presentation/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RequireAuth from './presentation/store/auth/require-auth'
import { ToastContainer } from 'react-toastify'
import Employess from './presentation/pages/Employees'
import Servicos from './presentation/pages/Servicos'
import Settings from './presentation/pages/Settings'
import SignUp from './presentation/pages/Signup'
import Costumers from './presentation/pages/Costumer'
import Animals from './presentation/pages/Animal'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<RequireAuth />}>
              <Route path="/home" element={<App />} />
              <Route path="/employees" element={<Employess />} />
              <Route path="/costumers" element={<Costumers />} />
              <Route path="/animals" element={<Animals />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
)
