import { keyframes, styled } from '../../../../../stitches.config'
const spinner = keyframes({
  to: {
    transform: 'rotate(360deg)'
  }
})

export const Spinner = styled('div', {
  dispaly: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '10px',
  height: '10px',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'white',
  borderRadius: '5px',
  animation: `${spinner}  1.5s linear infinite`
  // define stitches variants using values from sticthes.config.ts
})
