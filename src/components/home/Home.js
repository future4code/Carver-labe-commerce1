import React from 'react';
import { ContainerConteudoCentral, ContainerHeader, ContainerOrdenacao, ContainerCards } from './style'
import Card from '../card/Card'
import listaProdutos from '../../data/produtos.json'

export default class ConteudoCentral extends React.Component {

    state = {
        produtos: listaProdutos
    }

    render() {

        return (
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
                <hr/>
                <ContainerCards>
                    {this.state.produtos.map(produto => {
                        return <Card key={produto.id} produto={produto} />
                    })}
                </ContainerCards>
            </ContainerConteudoCentral>
        )
    }
}