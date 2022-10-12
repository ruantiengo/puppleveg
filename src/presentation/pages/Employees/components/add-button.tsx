import React, { useState } from 'react'
import { styled, keyframes } from '@stitches/react'
import { violet, blackA, mauve, green } from '@radix-ui/colors'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import Button from '../../../components/button'
import { addEmployee } from '../../../store/employess/add'
import { Employee } from '../../../store/employess'
import { notify } from '../../../helpers/toatisfy'
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

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` }
})
interface Props {
  type: 'new' | 'delete' | 'update'
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>
}
const AddButton = ({ type, setEmployees }: Props) => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [profession, setProfession] = useState('')
  const [salary, setSalary] = useState(0)
  const [phone, setPhone] = useState('')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ContentButton>
          <Button type={type} />
        </ContentButton>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Novo Funcionario</DialogTitle>
        <DialogDescription>Preencha os campos corretamente</DialogDescription>
        <Fieldset>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder={'John Doe'}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="cpf">Cpf</Label>
          <Input
            id="cpf"
            placeholder={'123.456.789-12'}
            onChange={(e) => {
              setCpf(e.target.value)
            }}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="profession">Profissão</Label>
          <Input
            id="profession"
            placeholder={'Vendedor'}
            onChange={(e) => {
              setProfession(e.target.value)
            }}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            placeholder={'Telefone'}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="salary">Salário</Label>
          <Input
            id="salary"
            type={'number'}
            placeholder={'1500'}
            onChange={(e) => {
              setSalary(Number(e.target.value))
            }}
          />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <DialogClose asChild>
            <ContentButton
              variant="green"
              onClick={async () => {
                try {
                  const employee: Employee = {
                    cpf,
                    name,
                    phone,
                    salary,
                    profession
                  }
                  if (!cpf || !name || !salary || !profession) {
                    return notify('Informações invalidas')
                  } else {
                    employee.cpf = employee.cpf.replace(/\D/g, '')
                    if (employee.cpf.length !== 11) {
                      notify('CPF Invalido')
                    }
                    const res = await addEmployee(employee)
                    console.log(res)

                    if (res.status === 200) {
                      setEmployees((old) => [...old, employee])
                    }
                  }
                } catch (error) {
                  notify('Um funcionario com esse CPF já existe')
                  console.log(error)
                }
              }}>
              Salvar
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

export default AddButton
