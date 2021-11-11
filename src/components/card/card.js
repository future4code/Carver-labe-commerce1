import React from 'react'
import { CardContainer } from './style'

export default function Card(props) {
    return <CardContainer>
        <img src={props.produto.imageUrl} />
        <h2>{props.produto.name}</h2>
        <p>{props.produto.value.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</p>
        <button>Adicionar ao Carrinho</button>
    </CardContainer>
}