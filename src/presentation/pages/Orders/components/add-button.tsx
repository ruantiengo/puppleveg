/* eslint-disable multiline-ternary */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { styled, keyframes } from '@stitches/react'
import { violet, blackA, mauve, green } from '@radix-ui/colors'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import Button from '../../../components/button'
import { notify } from '../../../helpers/toatisfy'
import useCostumer, { Costumer } from '../../../store/costumers'
import { Order } from '../../../store/order'
import { addOrders } from '../../../store/order/add'
import { Animal } from '../../../store/animal'
import { useNavigate } from 'react-router-dom'
import SelectDemo from '../../../components/select'
import { getByCpf } from '../../../store/animal/getById'
import useService, { Service } from '../../../store/service'
import SelectInputAnimal from './select-animal'
interface Props {
  type: 'new' | 'delete' | 'update'
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>
}
const AddButton = ({ type, setOrders: setCostumer }: Props) => {
  const { mutate: costumerMutate } = useCostumer()
  const { mutate: serviceMutate } = useService()
  const [cpf, setCpf] = useState('')
  const [status, setStatus] = useState('')
  const [fk_animal_id, setFkAnimalId] = useState(0)
  const [fk_service_id, setFkServiceId] = useState(0)
  const navigator = useNavigate()

  const [costumers, setCostumers] = useState([] as Costumer[])
  const [animals, setAnimals] = useState([] as Animal[])
  const [services, setServices] = useState([] as Service[])

  useEffect(() => {
    costumerMutate({} as unknown as void, {
      onSuccess: (res) => {
        if (res.statusCode === 403) {
          localStorage.removeItem('accessToken')
          return navigator('/')
        } else {
          return setCostumers(res.body)
        }
      },
      onError: () => {}
    })
    serviceMutate({} as unknown as void, {
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

  useEffect(() => {
    getByCpf(cpf).then((res) => {
      setAnimals(res.data)
    })
  }, [cpf])

  const selectedCostumer =
    cpf !== '' ? (
      <Fieldset>
        <Label htmlFor="cpf">Animal</Label>
        <SelectInputAnimal
          array={animals}
          setValue={setFkAnimalId}
          title={'Selecione o animal'}
        />
      </Fieldset>
    ) : (
      ''
    )
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ContentButton>
          <Button type={type} />
        </ContentButton>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Novo Pedido</DialogTitle>
        <DialogDescription>Cadastre as Informações do pedido</DialogDescription>
        <Fieldset>
          <Label htmlFor="cpf">Dono</Label>
          <SelectDemo
            array={costumers}
            setValue={setCpf}
            title={'Selecione o dono do animal'}
            chave={'cpf'}
          />
        </Fieldset>
        {selectedCostumer}

        <Fieldset>
          <Label htmlFor="cpf">Serviço</Label>
          <SelectDemo
            array={services}
            setValue={setFkServiceId}
            title={'Selecione o servico'}
            chave={'id'}
          />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <DialogClose asChild>
            <ContentButton
              variant="green"
              onClick={async () => {
                try {
                  setStatus('Pendente')
                  const order: Order = {
                    fk_animal_id,
                    fk_service_id,
                    status
                  }
                  if (!fk_animal_id || !fk_service_id || !status) {
                    return notify('Informações invalidas')
                  } else {
                    const res = await addOrders(order)

                    if (res.status === 200) {
                      setCostumer((old) => [...old, order])
                    }
                  }
                } catch (error) {
                  notify('Erro')
                }
              }}>
              Salvar edições
            </ContentButton>
          </DialogClose>
        </Flex>
        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' }
})

function Content({ children, ...props }: any) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17
})

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5
})

// Exports
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = Content
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close

// Your app...
const Flex = styled('div', { display: 'flex' })

const ContentButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: '0 0 0 2px black' }
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` }
      }
    }
  },

  defaultVariants: {
    variant: 'violet'
  }
})

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` }
})

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15
})

const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right'
})
export default AddButton
