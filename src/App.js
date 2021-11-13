import React from 'react';
import { MainContainer, GlobalStyle, ContainerConteudoCentral, ContainerHeader, ContainerOrdenacao, ContainerCards } from './style'
import LateralEsquerda from './components/lateralEsquerda/LateralEsquerda'
import LateralDireita from './components/lateralDireita/LateralDireita'
import Card from './components/card/Card'
import listaProdutos from './data/produtos.json'


export default class App extends React.Component {

  state = {
    produtos: listaProdutos,
    carrinho: [],
    query: '',
    maxPrice: '',
    minPrice: '',
    sortingParameter: 'name',
    order: 1
  }

  updateQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  updateMaxPrice = (event) => {
    this.setState({
      maxPrice: event.target.value
    })
  }

  updateMinPrice = (event) => {
    this.setState({
      minPrice: event.target.value
    })
  }



  adicionarCarrinho = (id) => {
      console.log(id)
    // const novoCarrinho = this.state.produtos.filter((item) => {
    //   if (item.id === id) {
    //     return item
    //   }
    // })

    //     this.setState({
    //   carrinho: novoCarrinho
    // })
  }

  // removerCarrinho = (id) => {
  //   const novoCarrinho = this.state.produtos.filter((item) => {
  //     if (item.id = id) {
  //       return item
  //     }
  //   })

  //   this.setState({
  //     carrinho: novoCarrinho
  //   })
  // }



  updateOrder = (event) => {
    this.setState({
      order: event.target.value
    })
  }

  updateSortingParameter = (event) => {
    this.setState({
      sortingParameter: event.target.value
    })
  }

  render() {
    const produtos = this.state.produtos.filter(item => {
      return item.name.toLowerCase().includes(this.state.query.toLowerCase())
    }).filter(item => {
      return this.state.minPrice === "" || item.value >= this.state.minPrice
    }).filter(item => {
      return this.state.maxPrice === "" || item.value <= this.state.maxPrice
    }).sort((currentItem, nextItem) => { 
      if (this.state.sortingParameter === 'name') {
        return this.state.order * currentItem.name.localeCompare(nextItem.name)
      } else {
        return this.state.order * (currentItem.value - nextItem.value)
      }
    }).map(item => {
      return <Card key={item.id} item={item} adicionarCarrinho={this.adicionarCarrinho}
      />
    })


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
            <h3>Quantidade de Produtos: {produtos.length}</h3>
            <ContainerOrdenacao>
              <label>Ordenação</label>
              <select
                name='sort'
                value={this.state.sortingParameter}
                onChange={this.updateSortingParameter}>
                <option value='name'>Nome</option>
                <option value='value'>Preço</option>
              </select>
              <select 
                name='order'
                value={this.state.order}
                onChange={this.updateOrder}>
                <option value={1}>Crescente</option>
                <option valeu={-1}>Decrescente</option>
              </select>
            </ContainerOrdenacao>
          </ContainerHeader>
          <hr />
          <ContainerCards>
            {produtos}
          </ContainerCards>
        </ContainerConteudoCentral>
        <LateralDireita 
          produtos={this.state.produtos}
          carrinho={this.state.carrinho}
          removerCarrinho={this.removerCarrinho}
        />
            
      </MainContainer>
      
           
    )
  }
}

