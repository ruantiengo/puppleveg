import React from 'react'
import { styled } from '../../../../stitches.config'
import Item from './components/item'
import {
  House,
  IdentificationBadge,
  ListBullets,
  User,
  SignOut,
  PawPrint,
  ClipboardText
} from 'phosphor-react'

type NavbarProps = {
  urlActive: string
}

const Navbar = ({ urlActive }: NavbarProps) => {
  return (
    <Container>
      <LogoContainer>
        <img src="/logo.svg" />
        <span>PuppleVeg</span>
      </LogoContainer>
      <MenuItems>
        <Item
          url="/home"
          title="Home"
          ItemIcon={<House size={24} weight="fill" />}
          urlActive={urlActive}
        />
        <Item
          url="/employees"
          title="Funcionarios"
          ItemIcon={<IdentificationBadge size={24} weight="fill" />}
          urlActive={urlActive}
        />
        <Item
          url="/costumers"
          title="Clientes"
          ItemIcon={<User size={24} weight="fill" />}
          urlActive={urlActive}
        />
        <Item
          url="/animals"
          title="Animais"
          ItemIcon={<PawPrint size={24} weight="fill" />}
          urlActive={urlActive}
        />
        <Item
          url="/services"
          title="Serviços"
          ItemIcon={<ListBullets size={24} weight="fill" />}
          urlActive={urlActive}
        />
        <Item
          url="/orders"
          title="Pedidos"
          ItemIcon={<ClipboardText size={24} weight="fill" />}
          urlActive={urlActive}
        />
        <BreakLine />

        <Item
          url="/"
          title="Sair"
          ItemIcon={<SignOut size={32} weight="fill" />}
          urlActive={urlActive}
        />
      </MenuItems>
    </Container>
  )
}
const Container = styled('div', {
  width: 255,
  height: '100vh',
  background: '$secondary',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Mulish'
})

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 38,
  height: 150,

  span: {
    marginLeft: '-130px',
    fontSize: 19,
    fontWeight: 700,
    letterSpacing: 0.4,
    color: '$text_gray'
  }
})
const MenuItems = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})
const BreakLine = styled('div', {
  borderTop: '1px solid',
  width: '100%',
  marginTop: 32,
  marginBottom: 20,
  opacity: 0.4,
  borderColor: '$text_gray'
})

export default Navbar
