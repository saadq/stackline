import React from 'react'
import styled from 'styled-components'
import { Item } from '../types/item'

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 0 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 3px;
  width: 23vw;
  height: calc(100vh - 3.5rem - 3rem);
`

const Image = styled.img`
  width: 65%;
  min-width: 150px;
`

const Title = styled.h1`
  font-size: 1rem;
  margin-top: 1rem;
`

const Subtitle = styled.h2`
  padding: 0 4rem;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.4rem;
  color: #95a2b1;
`

const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding: 1rem;
  border-top: 2px solid #f5f6fa;
  border-bottom: 2px solid #f5f6fa;
`

const Tag = styled.div`
  font-size: 0.75rem;
  padding: 0.15rem 1rem;
  margin: 0.3rem 0.25rem;
  border: 1px solid #eff1f5;
  border-radius: 6px;
`

interface Props {
  item: Item
}

export function Sidebar({ item }: Props) {
  return (
    <Aside>
      <Image src={item.image} />
      <Title>{item.title}</Title>
      <Subtitle>{item.subtitle}</Subtitle>
      <Tags>
        {item.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags>
    </Aside>
  )
}
