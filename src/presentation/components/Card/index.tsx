import React from 'react'
import { styled } from '../../../../stitches.config'

type CardProps = {
  title: string
  value: number
}

const CardDatas = ({ title, value }: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  )
}

const Container = styled('div', {
  width: 258,
  height: 134,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: '#DFE0EB',
  color: '#9FA2B4',
  '&:hover': {
    borderColor: '$primary',
    color: '$primary'
  },
  background: '#FFFFFF'
})

const Title = styled('h1', {
  fontSize: 19,
  fontWeight: 700
})

const Value = styled('span', {
  fontWeight: 700,
  fontSize: 40,
  color: 'Black',
  '&:hover': {
    color: '$primary'
  }
})

export default CardDatas
