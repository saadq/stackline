import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'
import { Chart } from './Chart'
import { Item } from '../types/item'

const Wrapper = styled.div`
  margin-top: 3rem;
`

interface Props {
  item: Item
}

export function ItemDetails({ item }: Props) {
  return (
    <Wrapper>
      <Sidebar />
      <Chart />
    </Wrapper>
  )
}
