import styled from 'styled-components'

export const ContainerConteudoCentral = styled.div`
    flex-grow: 7;
    border: 5px solid blue;
    display: flex;
    flex-direction: column;
`

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ContainerOrdenacao = styled.div`
    display: flex;
    justify-content: flex-end;
    label{
        
    }
`

export const ContainerCards = styled.div`
    display: grid;
    grid-auto-flow: row;
`