import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'
import { Table } from './Table'
import { Item } from '../types/item'

const Wrapper = styled.div`
  display: flex;
  margin-top: 3.5rem;
`

interface Props {
  item: Item
}

export function ItemDetails({ item }: Props) {
  return (
    <Wrapper>
      <Sidebar item={item} />
      <Table item={item} />
    </Wrapper>
  )
}
