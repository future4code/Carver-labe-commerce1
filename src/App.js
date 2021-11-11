import React from 'react';
import { MainContainer, GlobalStyle } from './style'
import LateralEsquerda from './components/lateralEsquerda/lateralEsquerda'
import ConteudoCentral from './components/conteudoCentral/conteudoCentral';
import LateralDireita from './components/lateralDireita/lateralDireita'

export default class App extends React.Component {

  // Estado para comunicação entre Lateral Esquerda (Filtros) e Conteúdo Central (Produtos)
  state = {
    query: '',
    maxPrice: '',
    minPrice: '',
    sortingParameter: 'produto',
    order: 'asc'
  }

  updateQuery = (evento) => {
    this.setState({
      query: evento.target.value
   })
  }

  updateMaxPrice = (evento) => {
    this.setState({
      maxPrice: evento.target.value
   })
  }

  updateMinPrice = (evento) => {
    this.setState({
      minPrice: evento.target.value
   })
  }

  render() {

    return (
      <MainContainer>
        <GlobalStyle />
        <LateralEsquerda 
          query={this.state.query}
          maxPrice={this.state.maxPrice}
          minPrice={this.state.minPrice}
          updateQuery={this.updateQuery}
          updateMaxPrice={this.updateMaxPrice}
          updateMinPrice={this.updateMinPrice}
        />
        <ConteudoCentral 
          order={this.state.order}
          sortingParameter={this.state.sortingParameter}
        />
        <LateralDireita />
      </MainContainer>
    )
  }
}