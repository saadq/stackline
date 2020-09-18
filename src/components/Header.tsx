import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: white;
  border-bottom: 2px solid #f0f3f6;
  padding: 1.5rem;
`

const Logo = styled.img`
  width: 135px;
`

export function Header() {
  return (
    <StyledHeader>
      <Logo
        src="https://assets-global.website-files.com/5d066a9385f49bb88aa6f2a5/5d3498ef166bd89dcdab11de_logo-gray.svg"
        alt="logo"
      />
    </StyledHeader>
  )
}
