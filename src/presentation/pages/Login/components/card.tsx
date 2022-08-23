import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { styled } from '../../../../../stitches.config'
import useLogin from '../../../store/auth/auth-api'

import { Logo } from './logo'
import { Spinner } from './spinner'

export const Card: React.FC = () => {
  const { mutate, isLoading } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)

    mutate(data)
  }

  return (
    <Container>
      <Logo />
      <Content>
        <Title>Bem vindo ao PuppleVeg! 👋🏻</Title>
        <SubTitle>Porfavor, digite o seu login e sua senha:</SubTitle>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <WarnText>{errors.email?.message as String}</WarnText>
          <Input
            style={
              errors.email
                ? {
                    borderTop: '4px solid red'
                  }
                : {}
            }
            key="email"
            placeholder="email"
            {...register('email', {
              required: 'Digite um email valido,'
            })}
          />
          <WarnText>{errors.password?.message as String}</WarnText>
          <Input
            style={
              errors.password
                ? {
                    borderTop: '5px solid red'
                  }
                : {}
            }
            key="password"
            type="password"
            {...register('password', {
              required: 'Digite uma senha valida.',
              minLength: {
                message: 'A senha deve ter mais que 8 caracteres',
                value: 8
              }
            })}
            placeholder="senha"
          />

          <SpanForgotPassword>
            <Link to={''}>Esqueceu a sua senha?</Link>
          </SpanForgotPassword>

          <Button disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Login'}
          </Button>
        </FormLogin>
      </Content>
    </Container>
  )
}

const Container = styled('div', {
  boxSizing: 'border-box',
  height: '493px',
  width: '450px',
  background: 'White',
  boxShadow: '0 2px 10px 1px rgba(58, 53, 65, 0.3)',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  padding: '48px 28px 36px',
  alignItems: 'left',
  minWidth: 250,
  minHeight: '100%',
  '@sm': {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 0px'
  }
})
const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  width: 394,
  height: 308,
  '@sm': {
    width: '100%',
    height: '100%',
    marginTop: '1rem',
    // justifyContent: 'center',
    alignItems: 'center'
  }
})
const Input = styled('input', {
  border: '1px solid rgba(58, 53, 65, 0.23)',
  borderRadius: 6,
  width: 394,
  height: 56,
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 12px',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 24,
  marginBottom: 16,
  transition: '500ms color',
  '&::placeholder': {
    color: 'rgba(58, 53, 65, 0.38)',
    fontFamily: 'Inter',
    fontStyle: 'normal'
  },
  '&:focus': {
    outline: 'none',
    border: '2px solid $primary'
  },
  '@sm': {
    width: '100%'
  }
})
const Title = styled('h3', {
  fontFamily: 'Inter',
  fontSize: '24px',
  lineHeight: '32px',
  marginBottom: '0',
  fontWeight: '600',
  letterSpacing: '0.18px',
  color: 'rgba(58, 53, 65, 0.87)',
  '@sm': {
    textAlign: 'center',
    marginTop: '0rem'
  }
})
const SubTitle = styled('h4', {
  marginTop: '0.3rem',
  marginBottom: '1.3rem',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: 14,
  lineHeight: '20px',
  width: '100%',

  letterSpacing: 0.15,

  /* Light/Text/Secondary */

  color: 'rgba(58, 53, 65, 0.68)',
  '@sm': {
    width: '90%',
    textAlign: 'center'
  }
})

const FormLogin = styled('form', {
  '@sm': {
    width: '90%'
  }
})

const SpanForgotPassword = styled('span', {
  fontWeight: '400',
  fontSize: 14,
  lineHeight: '20px',
  justifySelf: 'flex-end',
  letterSpacing: '0.15px',
  color: '$primary',
  display: 'flex',
  justifyItems: 'flex-end',
  width: '100%',
  justifyContent: 'right',
  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '@sm': {
    width: '100%'
  }
})
const WarnText = styled('span', {
  color: '#e74c3c',
  fontSize: 14,
  display: 'flex',
  width: '100%',
  paddingBottom: 8
})
const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 42,
  background: '#9155FD',
  border: 'none',
  boxShadow: '0px 4px 8px -4px rgba(58, 53, 65, 0.42)',
  borderRadius: 5,
  marginTop: '24px',
  fontWeight: 500,
  fontSize: 15,
  /* identical to box height, or 173% */
  color: 'White',
  letterSpacing: 0.46,
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'background 0.3s',
  '&:hover': {
    background: '#804BDF'
  },
  '@sm': {
    width: '100%'
  }
})
