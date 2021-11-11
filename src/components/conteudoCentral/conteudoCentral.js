import React from 'react';
import { ContainerConteudoCentral, ContainerHeader, ContainerOrdenacao, ContainerCards } from './style'
import Card from '../card/card'

export default class ConteudoCentral extends React.Component {

    state = {
        produtos: [
            {
                id: 1,
                name: "Meteorito da Lua",
                value: 10000.0,
                imageURL: "https://picsum.photos/id/512/300/200"
            },
            {
                id: 2,
                name: "Meteorito de Marte",
                value: 15000.0,
                imageURL: "https://picsum.photos/id/513/300/200"
            },
            {
                id: 3,
                name: "Meteorito de Venus",
                value: 25000.0,
                imageURL: "https://picsum.photos/id/514/300/200"
            },
            {
                id: 4,
                name: "Meteorito de Mercurio",
                value: 18000.0,
                imageURL: "https://picsum.photos/id/515/300/200"
            },
            {
                id: 5,
                name: "Meteorito de Jupiter",
                value: 40000.0,
                imageURL: "https://picsum.photos/id/516/300/200"
            },
            {
                id: 6,
                name: "Meteorito de Urano",
                value: 100000.0,
                imageURL: "https://picsum.photos/id/517/300/200"
            }
        ]
    }

    render() {

        return (
            <ContainerConteudoCentral>
                <ContainerHeader>
                    <p>Quantidade de Produtos:</p>
                    <ContainerOrdenacao>
                        <label>Ordenação</label>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </ContainerOrdenacao>
                </ContainerHeader>
                <ContainerCards>
                    {this.state.produtos.map(produto => {
                        return <Card key={produto.id} produto={produto} />
                    })}
                </ContainerCards>
            </ContainerConteudoCentral>
        )
    }
}