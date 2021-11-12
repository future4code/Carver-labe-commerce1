import React from 'react';
import { MainContainer, GlobalStyle, ContainerConteudoCentral, ContainerHeader, ContainerOrdenacao, ContainerCards } from './style'
import LateralEsquerda from './components/lateralEsquerda/lateralEsquerda'
import LateralDireita from './components/lateralDireita/lateralDireita'
import Card from './components/card/card'
import listaProdutos from './data/produtos.json'



// let listaProdutos = [
//   {
//     id: 1,
//     name: "Meteorito da Lua",
//     value: 10000.0,
//     imageUrl: "https://picsum.photos/id/512/200/200"
// },
// {
//     id: 2,
//     name: "Meteorito de Marte",
//     value: 15000.0,
//     imageUrl: "https://picsum.photos/id/513/200/200"
// },
// {
//     id: 3,
//     name: "Meteorito de Venus",
//     value: 25000.0,
//     imageUrl: "https://picsum.photos/id/514/200/200"
// },
// {
//     id: 4,
//     name: "Meteorito de Mercurio",
//     value: 18000.0,
//     imageUrl: "https://picsum.photos/id/515/200/200"
// },
// {
//     id: 5,
//     name: "Meteorito de Jupiter",
//     value: 40000.0,
//     imageUrl: "https://picsum.photos/id/516/200/200"
// },
// {
//     id: 6,
//     name: "Meteorito de Urano",
//     value: 100000.0,
//     imageUrl: "https://picsum.photos/id/517/200/200"
// }
// ]

// Class Produtos extends React.Component
//      constructor(props){
//        super(props)
//        this.state = {
//          qty: 0
//        };

//        this.adicionar = this.adicionar.bind(this);
//        this.remover = this.remover.bind(this);
//      }

//      adicionar(){
//        this.setState({
//          qty: this. state.qty +1;
//        }

//        remover(){
//         this.setState({
//           qty: this. state.qty -1;
//         }

//      }

//      render(){

//       return(

//        <div>

//        <div><h4>{this.props.name}: R$ {this.props.value}</h4> </div>

//        <div>Quantidade: {this.props.qty}</div>

//        </div>
//        <div>

//       <button type="button" class="btn btn-default" onClick= "{this.adicionar}">+1</button>
//       <button type="button" class="btn btn-default" onClick= "{this.remover}">-1</button>
//        </div>
//       ) 
//       }
//       class ListaProdutos extends React.Component{
//         constructor(props){
//           super(props);
//           this.state = {
//             listaProdutos: ""
//           } 
//         }
//       }
//       ComponentDidMount(){
//         setTimeout(() => {
//            this.state({listaProdutos : listaProdutos})
//           }, 1000);
//         }
//       }

//       render(){
//          if(!this.state.listaProdutos) return <p>Carregando...</p>
//          let componente = this;
//          let products = this.state.listaProdutos. 
//       }



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

  // updateCarrinho = (id) => {
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
      return <Card key={item.id} item={item} />
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
        />
      </MainContainer>
    )
  }
}