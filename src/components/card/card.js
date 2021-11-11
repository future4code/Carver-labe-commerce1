import React from 'react'
import { CardContainer, CardFooter, CardContent } from './style'

export default function Card(props) {
    return <CardContainer>
        <img src={props.produto.imageURL} />
        <h2 title={props.produto.name}>
            <u >{props.produto.name} </u>
        </h2>
        <CardFooter>
            <span> R$ {props.produto.value.toFixed(2).replace(".", ",")}</span>
        </CardFooter>
    </CardContainer>
}