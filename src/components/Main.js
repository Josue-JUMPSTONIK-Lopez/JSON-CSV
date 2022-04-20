import styled from "styled-components";

export const Main = styled.main`
    min-width: 320px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    gap: 20px;

    @media (max-width: 320px) {
    width: 100%;
  }
`