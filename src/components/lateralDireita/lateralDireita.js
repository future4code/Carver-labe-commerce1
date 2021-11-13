import React from 'react';
import { ContainerLateralDireita, CarrinhoDiv } from './style'
import Card from '../card/Card'



export default class LateralDireita extends React.Component {

        render() {

            return(
                <ContainerLateralDireita>
                    <h1>Carrinho</h1>
                    <p>itens: {this.props.carrinho.map((item)=> {
                        return (
                            <CarrinhoDiv>
                            <li>
                                <span>N - </span> 
                                <span>{item.name}</span>
                            <button onClick={() => {this.props.removerCarrinho(item.id)}}> Remover </button>
                            </li>
                            </CarrinhoDiv>
                        )
                    })}</p>

                    <p>valor total: {this.props.produtos.value}</p>
                </ContainerLateralDireita>
        )
    }
}

     


