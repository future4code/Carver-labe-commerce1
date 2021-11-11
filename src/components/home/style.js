import styled from 'styled-components'

// styled Conteúdo Central

export const ContainerConteudoCentral = styled.div`
    flex-grow: 5;
    /* max-width: 900px; */
    display: flex;
    flex-direction: column;
`

export const ContainerHeader = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ContainerOrdenacao = styled.div`
    display: flex;
    justify-content: flex-end;
    label{
        margin: 0 10px;
    }
`

export const ContainerCards = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 220px);
    justify-content: space-around;
`