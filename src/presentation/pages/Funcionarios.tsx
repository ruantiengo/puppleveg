import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectCurrentToken } from '../store/auth/auth-slice'

function Funcionarios() {
  const token = useSelector(selectCurrentToken)
  return <>
    <Navbar urlActive='/funcionarios'/>
  </>
}

export default Funcionarios
