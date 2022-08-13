import { styled } from '../../../stitches.config'
import React from 'react'

type Props = {
  children: React.ReactNode
}
const ContainerLogin = ({ children }: Props) => {
  return <Box></Box>
}

const Box = styled('div', {
  height: '100vh',
  background: '$background',
  display: 'flex'
})

export default ContainerLogin
