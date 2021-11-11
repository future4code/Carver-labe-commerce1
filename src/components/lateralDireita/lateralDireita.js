import React from 'react';
import { ContainerLateralDireita } from './style'

export default class LateralDireita extends React.Component {

    render() {

        return(
            <ContainerLateralDireita>
                <h1>Carrinho</h1>
                <p>itens</p>
                <p>valor total</p>
            </ContainerLateralDireita>
        )
    }
}