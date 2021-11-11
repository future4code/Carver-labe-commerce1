import React from 'react';
import { MainContainer, GlobalStyle, ContainerConteudoCentral, ContainerHeader, ContainerOrdenacao, ContainerCards } from './style'
import LateralEsquerda from './components/lateralEsquerda/lateralEsquerda'
import LateralDireita from './components/lateralDireita/lateralDireita'
import Card from './components/card/card'
import listaProdutos from './data/produtos.json'

export default class App extends React.Component {

  // Estado para comunicação entre Lateral Esquerda (Filtros) e Conteúdo Central (Produtos)
  state = {
    produtos: listaProdutos,
    query: '',
    maxPrice: '',
    minPrice: '',
    sortingParameter: 'produto',
    order: 'asc',
    listaFiltrada: ''
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
    // função para atualizar state lista-filtrada
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
        <ContainerConteudoCentral>
          <ContainerHeader>
            <h3>Quantidade de Produtos: {this.state.produtos.length} </h3>
            <ContainerOrdenacao>
              <label>Ordenação</label>
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
            </ContainerOrdenacao>
          </ContainerHeader>
          <hr />
          <ContainerCards>
            {this.state.produtos
              .filter(item => {
                return item.name.toLowerCase().includes(this.state.query.toLowerCase())
              })
              .filter(item => {
                return this.state.minPrice === "" || item.value >= this.state.minPrice
              })
              .filter(item => {
                return this.state.maxPrice === "" || item.value <= this.state.maxPrice
              })
              .sort((currentItem, nextItem) => {
                switch (this.state.sortingParameter) {
                  case "title":
                    return this.state.order * currentItem.title.localeCompare(nextItem.title)
                  default:
                    return this.state.order * (currentItem.value - nextItem.value)
                }
              })
              .map(item => {
                return <Card key={item.id} item={item} />
              })}
          </ContainerCards>
        </ContainerConteudoCentral>
        <LateralDireita />
      </MainContainer>
    )
  }
}