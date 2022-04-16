import React from 'react'
import styled from "styled-components";

const HeaderContainer = styled.header`

`

const Title = styled.h1`
    font-size: 5rem;
    text-align: center;
    
`

export const Header = () => {
  return (
    <>
    <HeaderContainer>
        <Title>JSON - CSV</Title>
    </HeaderContainer>
    </>
  )
}
