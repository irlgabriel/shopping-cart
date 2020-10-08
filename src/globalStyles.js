import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
`

export const Bold = styled.span`
  font-weight: bold;
`