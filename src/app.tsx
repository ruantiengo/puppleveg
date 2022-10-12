import React from 'react'

import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './presentation/pages/Login'
import { Provider } from 'react-redux'
import { store } from './presentation/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RequireAuth from './presentation/store/auth/require-auth'
import { ToastContainer } from 'react-toastify'
import Employess from './presentation/pages/Employees'
import Settings from './presentation/pages/Settings'
import SignUp from './presentation/pages/Signup'
import Costumers from './presentation/pages/Costumer'
import Animals from './presentation/pages/Animal'
import Services from './presentation/pages/Service'
import OrderPage from './presentation/pages/Orders'
import Home from './presentation/pages/Home'
const App = () => {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<RequireAuth />}>
                <Route path="/home" element={<Home />} />
                <Route path="/employees" element={<Employess />} />
                <Route path="/costumers" element={<Costumers />} />
                <Route path="/animals" element={<Animals />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}
export default App
