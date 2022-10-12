/* eslint-disable dot-notation */
import React from 'react'
import { styled } from '@stitches/react'
import { violet, mauve } from '@radix-ui/colors'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Animal } from '../../../store/animal'

const Box = styled('div', { width: '70%' })

type Props = {
  title: string
  array: Array<Animal>
  setValue: React.Dispatch<React.SetStateAction<any>>
}
export const SelectInputAnimal = ({ title, array, setValue }: Props) => {
  console.log(array)

  return (
    <Box>
      <Select
        onValueChange={(value) => {
          setValue(value)
        }}>
        <SelectTrigger aria-label={title}>
          <SelectValue placeholder={title} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              {array.map((item, i) => (
                <SelectItem value={String(item.id)} key={i}>
                  <SelectItemText>{item.animalname}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectGroup>

            <SelectSeparator />
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </Box>
  )
}
const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
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

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
  '&:hover': { backgroundColor: mauve.mauve3 },
  '&[data-placeholder]': { color: violet.violet9 }
})

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: violet.violet11
})

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5
})

function Content({ children, ...props }: any) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1
  }
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default'
}

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

// Exports
export const Select = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = StyledIcon
export const SelectContent = Content
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton

export default SelectInputAnimal
