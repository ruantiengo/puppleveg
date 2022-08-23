import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './presentation/pages/App'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './presentation/pages/Login'
import { Provider } from 'react-redux'
import { store } from './presentation/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RequireAuth from './presentation/store/auth/require-auth'
import { ToastContainer } from 'react-toastify'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<RequireAuth />}>
              <Route path="/home" element={<App />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
)
