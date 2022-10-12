import { styled } from '@stitches/react'
import { Spinner } from 'phosphor-react'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { List } from '../../components/list'
import Navbar from '../../components/Navbar'
import UpdateButton from './components/update-button'
import AddButton from './components/add-button'
import { formatCPF } from '../../helpers/format-cpf'
import useCostumer, { Costumer } from '../../store/costumers'
import DeleteIcon from './components/delete-button'

function Costumers() {
  const [costumers, setCostumers] = useState([] as Costumer[])
  const { mutate } = useCostumer()
  const navigator = useNavigate()
  useEffect(() => {
    mutate({} as unknown as void, {
      onSuccess: (res) => {
        if (res.statusCode === 403) {
          localStorage.removeItem('accessToken')
          return navigator('/')
        } else {
          console.log(res.body)

          return setCostumers(res.body)
        }
      },
      onError: () => {
        console.log('123')
      }
    })
  }, [])

  const rows = useMemo(() => {
    return costumers.map((costumer) => {
      const row = {
        name: costumer.name,
        address: costumer.address,
        cpf: formatCPF(costumer.cpf),
        phone: costumer.phone,
        edit: (
          <UpdateButton
            type="update"
            cpf={costumer.cpf}
            setCostumers={setCostumers}
            costumer={costumer}
          />
        ),
        delete: (
          <DeleteIcon
            type="delete"
            cpf={costumer.cpf}
            setCostumer={setCostumers}
          />
        )
      }
      return row
    })
  }, [costumers])
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome completo',
        accessor: 'name' // accessor is the "key" in the data
      },
      {
        Header: 'Cpf',
        accessor: 'cpf'
      },
      {
        Header: 'Telefone',
        accessor: 'phone'
      },
      {
        Header: 'Endereço',
        accessor: 'address'
      },
      {
        Header: 'Editar',
        accessor: 'edit'
      },
      {
        Header: 'Deletar',
        accessor: 'delete'
      }
    ],
    []
  )
  return (
    <Container>
      <Navbar urlActive="/costumers" />
      <Content>
        <Header title={'Clientes'} />
        <FuncList>
          <Menu>
            <AddButton type="new" setCostumer={setCostumers} />
          </Menu>
          <Suspense fallback={<Spinner />}>
            <List columns={columns} data={rows} />
          </Suspense>
        </FuncList>
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

const FuncList = styled('div', {
  width: '90%',
  height: '80%',
  overflow: 'scroll',
  background: 'White',
  borderRadius: 8
})

const Menu = styled('div', {
  display: 'flex',
  marginTop: '2rem',
  marginLeft: '2rem',
  gap: '2rem',
  justifyContent: 'start'
})
export default Costumers
