import { styled } from '@stitches/react'
import { Spinner } from 'phosphor-react'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from './components/delete-button'
import Header from '../../components/Header'
import { List } from '../../components/list'
import Navbar from '../../components/Navbar'
import useEmployes, { Employee } from '../../store/employess'
import UpdateButton from './components/update-button'
import AddButton from './components/add-button'
import { formatCPF } from '../../helpers/format-cpf'

function Employess() {
  const [employees, setEmployees] = useState([] as Employee[])
  const { mutate } = useEmployes()
  const navigator = useNavigate()
  useEffect(() => {
    mutate({} as unknown as void, {
      onSuccess: (res) => {
        if (res.statusCode === 403) {
          localStorage.removeItem('accessToken')
          return navigator('/')
        } else {
          return setEmployees(res.body)
        }
      },
      onError: () => {
        console.log('123')
      }
    })
  }, [])

  const rows = useMemo(() => {
    return employees.map((employe) => {
      const row = {
        name: employe.name,
        profession: employe.profession,
        cpf: formatCPF(employe.cpf),
        salary: employe.salary,
        edit: (
          <UpdateButton
            type="update"
            cpf={employe.cpf}
            setEmployees={setEmployees}
            employee={employe}
          />
        ),
        delete: (
          <DeleteIcon
            type="delete"
            cpf={employe.cpf}
            setEmployees={setEmployees}
          />
        )
      }
      return row
    })
  }, [employees])
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
        Header: 'Profissao',
        accessor: 'profession'
      },
      {
        Header: 'Salario',
        accessor: 'salary'
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
      <Navbar urlActive="/employees" />
      <Content>
        <Header title={'Funcionarios'} />
        <FuncList>
          <Menu>
            <AddButton type="new" setEmployees={setEmployees} />
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
export default Employess
