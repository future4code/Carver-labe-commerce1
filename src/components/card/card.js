import React from 'react'
import { CardContainer } from './style'

export default function Card(props) {
    return <CardContainer>
        <img src={props.item.imageUrl} />
        <div className="card-div-text">
        <h2>{props.item.name}</h2>
        <p>{props.item.value.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</p>
        </div>
        <div className="card-div-button">
            <button>Adicionar ao Carrinho</button>
        </div>
    </CardContainer>
}