import React from 'react'
import { CardContainer } from './style'

export default function Card(props) {
    return <CardContainer>
        <img src={props.item.imageUrl} />
        <h2>{props.item.name}</h2>
        <p>{props.item.value.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</p>
        <button>Adicionar ao Carrinho</button>
    </CardContainer>
}