import React from 'react'

import { styled } from '../../../../stitches.config'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function App() {
  return (
    <Container>
      <Navbar urlActive="/home" />
      <Content>
        <Header title={'Home'} />
      </Content>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  background: '$background'
})

const Content = styled('div', {
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export default App
