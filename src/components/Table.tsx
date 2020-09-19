import React from 'react'
import styled from 'styled-components'
import { Item } from '../types/item'

const Wrapper = styled.div`
  flex: 1;
  background: white;
  padding-bottom: 2rem;
`

const StyledTable = styled.table`
  border: 1px solid #f5f6fa;
  border-collapse: collapse;
  width: 100%;

  th {
    padding: 2rem 0;
    font-weight: 400;
  }

  td {
    padding: 1rem 0;
    text-align: center;
    color: #95a2b1;
  }

  tr {
    border: 1px solid #f5f6fa;
  }
`

interface Props {
  item: Item
}

export function Table({ item }: Props) {
  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALE SALES</th>
            <th>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {item.sales.map((sale) => (
            <tr>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  )
}
