import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #E8EBE4;
    display: flex;
`