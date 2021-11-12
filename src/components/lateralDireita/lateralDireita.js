import React from 'react';
import { ContainerLateralDireita } from './style'



export default class LateralDireita extends React.Component {
    onClickApagarDoCarrinho = () => {
        this.props.ApagarDoCarrinho(this.props.propsNome);
      };


        render() {

            return(
                <ContainerLateralDireita>
                    <h1>Carrinho</h1>
                    <p>itens: {this.props.carrinho.map((item)=> {
                        return item.name
                    })}</p>
                    <p>valor total</p>

                    {/* para cada item, um botão remover */}
                </ContainerLateralDireita>
        )
    }
}

     


