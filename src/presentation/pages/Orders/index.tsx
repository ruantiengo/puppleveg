import { styled } from '@stitches/react'
import axios from 'axios'
import { Spinner } from 'phosphor-react'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { List } from '../../components/list'
import Navbar from '../../components/Navbar'
import baseUrl from '../../helpers/baseUrl'
import { convertToBrl } from '../../helpers/convertToBrl'

import useOrders, { Order } from '../../store/order'
import AddButton from './components/add-button'

const OrderPage = () => {
  const [orders, setOrders] = useState([] as Order[])
  const { mutate } = useOrders()
  const navigator = useNavigate()
  useEffect(() => {
    mutate({} as unknown as void, {
      onSuccess: (res) => {
        if (res.statusCode === 403) {
          localStorage.removeItem('accessToken')
          return navigator('/')
        } else {
          return setOrders(res.body)
        }
      },
      onError: () => {}
    })
  }, [])

  const rows = useMemo(() => {
    return orders.map((order) => {
      console.log(order)
      const date = new Date(order.data).toLocaleDateString('pt-BR')
      const row = {
        nameService: order.nameservice,
        nameAnimal: order.nameanimal,
        date,
        value: convertToBrl(order.value),
        status: (
          <>
            <select
              defaultValue={order.status}
              onChange={async (e) => {
                axios
                  .put(`${baseUrl}/orders/${order.id}`, {
                    status: e.target.value
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      console.log(e.target.value)
                      order.status = e.target.value
                    }
                  })
              }}>
              <option value={'Em Andamento'}>Em Andamento</option>
              <option value={'Concluido'}>Concluido</option>
              <option value={'Pendente'}>Pendente</option>
            </select>
          </>
        )
      }
      return row
    })
  }, [orders])
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome Animal',
        accessor: 'nameAnimal'
      },
      {
        Header: 'Nome Serviço',
        accessor: 'nameService'
      },
      {
        Header: 'Data',
        accessor: 'date'
      },
      {
        Header: 'Valor',
        accessor: 'value'
      },
      {
        Header: 'Status',
        accessor: 'status'
      }
    ],
    []
  )
  return (
    <Container>
      <Navbar urlActive="/orders" />
      <Content>
        <Header title={'Pedidos'} />
        <FuncList>
          <Menu>
            <AddButton type="new" setOrders={setOrders} />
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
export default OrderPage
