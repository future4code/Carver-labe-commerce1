import React from 'react';
import { ContainerConteudoCentral, ContainerHeader, ContainerOrdenacao, ContainerCards } from './style'

export default class ConteudoCentral extends React.Component {

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
                    <ContainerCards>

                    </ContainerCards>
                </ContainerHeader>
            </ContainerConteudoCentral>
        )
    }
}