import React from 'react'
import styled from "styled-components";

const HeaderContainer = styled.header`

`

const Title = styled.h1`
    font-size: 5rem;
    text-align: center;
    color: rgb(0, 5, 1);
    
    text-transform: uppercase;
    padding: 1px;
    font-weight: 100;
    position: relative;
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
