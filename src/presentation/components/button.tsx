import { ArrowsClockwise, Trash } from 'phosphor-react'
import React from 'react'
import { styled } from '../../../stitches.config'

type Props = {
  type: 'new' | 'delete' | 'update'
}
const Button = ({ type }: Props) => {
  const deleteIcon = <Trash size={32} weight="light" />
  const updateIcon = <ArrowsClockwise size={32} weight="light" />
  return (
    <Container type={type}>
      {type === 'new' ? <> Adicionar </> : ''}
      {type === 'update' ? updateIcon : ''}
      {type === 'delete' ? <>{deleteIcon}</> : ''}
    </Container>
  )
}

const Container = styled('button', {
  fontFamily: 'Mulish',
  gap: 5,
  height: 45,
  width: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 8,
  color: 'White',
  fontWeight: 700,
  cursor: 'pointer',
  variants: {
    type: {
      new: {
        height: 35,
        width: 95,
        background: 'white',
        color: '#29CC97'
      },
      delete: {
        background: '$error',
        width: 30,
        height: 30
      },
      update: {
        background: '$warning',
        width: 30,
        height: 30
      }
    }
  }
})
export default Button
