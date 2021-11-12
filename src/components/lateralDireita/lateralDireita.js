import React from 'react';
import { ContainerLateralDireita } from './style'

export default class LateralDireita extends React.Component {
    onClickApagarDoCarrinho = () => {
        this.props.ApagarDoCarrinho(this.props.propsNome);
      };


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
            </ContainerLateralDireita>
        )
    }
}

     


