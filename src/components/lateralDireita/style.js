import styled from 'styled-components'

export const ContainerLateralDireita = styled.div`
    flex-grow: 1;
    /* border: 5px solid green; */
    display: flex;
    flex-direction: column;
    background-color: #798071;
    padding: 1rem;

    button{
      cursor: pointer;
      align-self: center;
      margin: 5px;
      border: none;
      background-color: #D2D5DD;
      color: #555;
      padding: 5px;
   }
   button:hover{
      background-color: #999AC6;
      color: white;
   }
`

export const CarrinhoDiv = styled.div `
      display: flex;
      align-items: center;
      list-style: none;
      justify-content: space-around;
`