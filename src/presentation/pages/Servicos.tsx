import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectCurrentToken } from '../store/auth/auth-slice'

function Servicos() {
  const token = useSelector(selectCurrentToken)
  return <>
    <Navbar urlActive='/servicos'/>
  </>
}

export default Servicos
