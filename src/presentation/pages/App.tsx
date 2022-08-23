import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../store/auth/auth-slice'

function App() {
  const token = useSelector(selectCurrentToken)
  return <div>{token}</div>
}

export default App
