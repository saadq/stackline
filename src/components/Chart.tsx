import React from 'react'
import styled from 'styled-components'
import { Item } from '../types/item'

const Wrapper = styled.div`
  background: white;
  padding-bottom: 2rem;
`

interface Props {
  item: Item
}

export function Chart({ item }: Props) {
  return (
    <Wrapper>
      <p>hi</p>
    </Wrapper>
  )
}
