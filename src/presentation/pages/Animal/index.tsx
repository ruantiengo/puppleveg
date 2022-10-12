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
import useAnimal, { Animal } from '../../store/animal'
import { formatCPF } from '../../helpers/format-cpf'

function Animals() {
  const [animals, setAnimals] = useState([] as Animal[])
  const { mutate } = useAnimal()
  const navigator = useNavigate()
  useEffect(() => {
    mutate({} as unknown as void, {
      onSuccess: (res) => {
        if (res.statusCode === 403) {
          localStorage.removeItem('accessToken')
          return navigator('/')
        } else {
          console.log(res.body)

          return setAnimals(res.body)
        }
      },
      onError: () => {}
    })
  }, [])

  const rows = useMemo(() => {
    return animals.map((animal) => {
      const species =
        animal.species[0].toUpperCase() +
        animal.species.substring(1).toLowerCase()

      const breed =
        animal.breed[0].toUpperCase() + animal.breed.substring(1).toLowerCase()
      const row = {
        name: animal.name,
        species,
        breed,
        owner: animal.owner,
        fk_costumer_cpf: formatCPF(animal.fk_costumer_cpf),

        edit: (
          <UpdateButton
            type="update"
            id={animal.id}
            setAnimals={setAnimals}
            animal={animal}
          />
        ),
        delete: (
          <DeleteIcon type="delete" id={animal.id} setAnimals={setAnimals} />
        )
      }
      return row
    })
  }, [animals])
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'name' // accessor is the "key" in the data
      },
      {
        Header: 'Especie',
        accessor: 'species'
      },
      {
        Header: 'Raça',
        accessor: 'breed'
      },
      {
        Header: 'Dono',
        accessor: 'owner'
      },
      {
        Header: 'CPF Dono',
        accessor: 'fk_costumer_cpf'
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
      <Navbar urlActive="/animals" />
      <Content>
        <Header title={'Animais'} />
        <FuncList>
          <Menu>
            <AddButton type="new" setAnimals={setAnimals} />
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
export default Animals
