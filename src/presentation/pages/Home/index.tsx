import React from 'react'

import { styled } from '../../../../stitches.config'
import CardDatas from '../../components/Card'
import FuncionarioList from './components/funcionarioList'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

import ServiceList from './components/serviceList'
function App() {
  return (
    <Container>
      <Navbar urlActive="/home" />
      <Content>
        <Header title={'Home'} />
        <Grid>
          <CardDatas title="Funcionarios" value={10} />
          <CardDatas title="Funcionarios" value={10} />
          <CardDatas title="Funcionarios" value={10} />
          <CardDatas title="Funcionarios" value={10} />
        </Grid>
        <Flex>
          <FuncionarioList />
          <ServiceList />
        </Flex>
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

const Grid = styled('div', {
  display: 'flex',
  gap: 40
})

const Flex = styled('div', {
  display: 'flex',
  width: '90%',
  marginTop: 80,
  gap: 60,
  justifyContent: 'space-between'
})

export default App
