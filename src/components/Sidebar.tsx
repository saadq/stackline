import React from 'react'
import styled from 'styled-components'
import { Item } from '../types/item'

const Aside = styled.aside`
  background: white;
  padding-bottom: 2rem;
`

interface Props {
  item: Item
}

export function Sidebar({ item }: Props) {
  return (
    <Aside>
      <p>hi</p>
    </Aside>
  )
}
