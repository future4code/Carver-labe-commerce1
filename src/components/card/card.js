import React from 'react'
import { CardContainer, CardButton } from './style'

export default function Card(props) {
    return <CardContainer>
        <img src={props.item.imageUrl} />

        <div>
        <h2>{props.item.name}</h2>
        <p>{props.item.value.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</p>
        </div>

        <CardButton>
            <button  onClick={() => {props.adicionarCarrinho(props.item.id)}}>Adicionar ao Carrinho</button>
        </CardButton>
        
    </CardContainer>
}