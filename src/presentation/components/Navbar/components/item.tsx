import React, { useState } from 'react'
import { styled } from '../../../../../stitches.config'

type ItemProps = {
  ItemIcon: React.ReactNode
  url: string
  title: string
  urlActive: string
}

const Item = ({ ItemIcon, url, urlActive, title }: ItemProps) => {
  const [isActive] = useState(url === urlActive)
  if (title === 'Sair') {
    return (
      <Container
        href={'/'}
        active={isActive ? 'true' : 'false'}
        onClick={() => {
          localStorage.removeItem('accessToken')
        }}>
        {ItemIcon}
        <span>{title}</span>
      </Container>
    )
  }
  return (
    <Container href={url} active={isActive ? 'true' : 'false'}>
      {ItemIcon}
      <span>{title}</span>
    </Container>
  )
}
const Container = styled('a', {
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',

  alignItems: 'center',
  height: 56,
  textDecoration: 'none',
  paddingLeft: 34,
  span: {
    fontSize: 16,

    letterSpacing: 0.2,
    marginLeft: 20
  },

  variants: {
    active: {
      false: {
        color: '$unselected_menu',
        '&:hover': {
          scale: '1.05'
        }
      },
      true: {
        borderLeft: '3px solid white',
        color: 'white'
      }
    }
  }
})
export default Item
