import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectCurrentToken } from '../store/auth/auth-slice'

function Settings() {
  const token = useSelector(selectCurrentToken)
  return <>
    <Navbar urlActive='/settings'/>
  </>
}

export default Settings
