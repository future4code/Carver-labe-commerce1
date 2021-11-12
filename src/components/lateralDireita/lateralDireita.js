import React from 'react';
import { ContainerLateralDireita } from './style'

export default class LateralDireita extends React.Component {

    state = {
        carrinho: [] // quantidade de itens no carrinho
    }

    render() {

        // função remover item

        return(
            <ContainerLateralDireita>
                <h1>Carrinho</h1>
                <p>itens: {this.props.produtos.length}</p>
                <p>valor total</p>
                {/* para cada item, um botão remover */}
            </ContainerLateralDireita>
        )
    }
}