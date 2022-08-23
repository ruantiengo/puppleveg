import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './auth-slice'
import React from 'react'
const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()
  if (token) return <Outlet />
  else return <Navigate to="/" state={{ from: location }} replace />
}
export default RequireAuth
