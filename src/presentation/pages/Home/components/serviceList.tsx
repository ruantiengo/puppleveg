import React, { useState } from 'react'
import { styled } from '../../../../../stitches.config'

const ServiceList = () => {
  const [tipoFuncionarios] = useState([
    {
      name: 'Ruan Tiengo',
      status: 'NOVO'
    },
    {
      name: 'Pedro Paulo',
      status: 'FINALIZADO'
    },
    {
      name: 'João Paulo',
      status: 'FINALIZADO'
    },
    {
      name: 'Guilherme Henrique',
      status: 'NOVO'
    }
  ])

  const colorStatus = (status: string) => {
    if (status === 'NOVO') return 'new'
    if (status === 'FINALIZADO') return 'finished'
    if (status === 'PENDENTE') return 'pendente'
  }
  return (
    <Container>
      <Header>
        <Title>Pedidos</Title>
        <a href="/funcionarios">Ver Todos</a>
      </Header>
      <List>
        {tipoFuncionarios.map((profissao) => {
          return (
            <>
              <ListItem key={profissao.name}>
                <ItemName>{profissao.name}</ItemName>
                <Status type={colorStatus(profissao.status)}>
                  {profissao.status}
                </Status>
              </ListItem>
              <BreakLine />
            </>
          )
        })}
      </List>
    </Container>
  )
}
const Container = styled('div', {
  width: '50%',
  height: '336px',
  backgroundColor: 'White',
  display: 'flex',
  paddingLeft: 0,
  justifyContent: 'start',
  border: '1px solid #DFE0EB',
  borderRadius: 8,
  paddingTop: 32,
  flexDirection: 'column',
  marginBottom: 50
})
const Header = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: 50,
  a: {
    color: '$primary',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  marginBottom: 50
})
const Title = styled('h1', {
  fontWeight: 700,
  fontSize: 19,
  width: '70%'
})
const List = styled('ul', {
  margin: 0,
  padding: 0,
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})
const ListItem = styled('li', {
  marginBottom: 20,
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'left',
  marginLeft: 110,
  overflow: 'hidden'
})
const Status = styled('span', {
  fontSize: 14,
  textAlign: 'right',
  margin: '0 auto',
  alignSelf: 'end',
  color: 'White',
  padding: 2,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 8,
  fontWeight: 700,
  variants: {
    type: {
      new: {
        background: '$success'
      },
      finished: {
        background: '$error'
      },
      pendente: {
        background: '$warning'
      }
    }
  }
})
const BreakLine = styled('div', {
  borderTop: '1px solid',
  borderColor: '$text_gray',
  width: '100%',
  opacity: 0.3,
  marginBottom: 12
})
const ItemName = styled('div', {
  color: 'black',
  width: '70%',
  fontSize: 14,
  fontWeight: 600
})

export default ServiceList
