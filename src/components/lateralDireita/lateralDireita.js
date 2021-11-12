import React from 'react';
import { ContainerLateralDireita } from './style'

export default class LateralDireita extends React.Component {
    onClickApagarDoCarrinho = () => {
        this.props.ApagarDoCarrinho(this.props.propsNome);
      };


    state = {
        carrinho: [] // quantidade de itens no carrinho
    }

    render() {

        onClickAdicionarnoCarrinho = () => {
            this.props.ApagarDoCarrinho(this.props.propsNome);
          };
    
    
        render() {
    
        return(
            <ContainerLateralDireita>
                <Texts>{this.props.propsQuantidade}x</Texts>
          <Texts> {this.props.propsName} </Texts>
          <Button onClick={this.onClickAdicionarnoCarrinho}>X</Button>
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

     


