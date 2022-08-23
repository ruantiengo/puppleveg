import React from 'react'
import { styled } from '../../../../../stitches.config'

export const Logo: React.FC = () => {
  return (
    <Container>
      <img src="/logo.svg" alt="logo puppleveg"></img>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px'
})
