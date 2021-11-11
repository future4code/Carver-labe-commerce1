import React from 'react';
import { ContainerLateralEsquerda } from './style'

export default class LateralEsquerda extends React.Component {

    render() {

        return(
            <ContainerLateralEsquerda>
                <h1>Filtros</h1>
                <input placeholder="valor mínimo" />
                <input placeholder="valor máximo" />
                <input placeholder="item" />
            </ContainerLateralEsquerda>
        )
    }
}