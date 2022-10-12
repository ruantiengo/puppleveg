import { styled } from '@stitches/react'
import { Spinner } from 'phosphor-react'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { List } from '../../components/list'
import Navbar from '../../components/Navbar'
import UpdateButton from './components/update-button'
import AddButton from './components/add-button'
import DeleteIcon from './components/delete-button'
import useService, { Service } from '../../store/service'
import { convertToBrl } from '../../helpers/convertToBrl'

function Services() {
  const [services, setServices] = useState([] as Service[])
  const { mutate } = useService()
  const navigator = useNavigate()
  useEffect(() => {
    mutate({} as unknown as void, {
      onSuccess: (res) => {
        if (res.statusCode === 403) {
          localStorage.removeItem('accessToken')
          return navigator('/')
        } else {
          return setServices(res.body)
        }
      },
      onError: () => {}
    })
  }, [])

  const rows = useMemo(() => {
    return services.map((service) => {
      const row = {
        name: service.name,
        value: convertToBrl(service.value),
        whichspecies: service.whichspecies,
        edit: (
          <UpdateButton
            type="update"
            id={service.id}
            setServices={setServices}
            service={service}
          />
        ),
        delete: (
          <DeleteIcon type="delete" id={service.id} setServices={setServices} />
        )
      }
      return row
    })
  }, [services])
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name' // accessor is the "key" in the data
      },
      {
        Header: 'Valor',
        accessor: 'value'
      },
      {
        Header: 'Especie',
        accessor: 'whichspecies'
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
      <Navbar urlActive="/services" />
      <Content>
        <Header title={'Serviços'} />
        <FuncList>
          <Menu>
            <AddButton type="new" setServices={setServices} />
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
export default Services
