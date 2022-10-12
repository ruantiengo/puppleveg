import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '../../../../stitches.config'
import { selectCurrentToken } from '../../store/auth/auth-slice'
import { Card } from './components/card'

const SignUp: React.FC = () => {
  const token = useSelector(selectCurrentToken)
  const navigator = useNavigate()

  useEffect(() => {
    if (token) return navigator('/home')
  }, [])

  return (
    <Container>
      <Card />
    </Container>
  )
}

const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
export default SignUp
