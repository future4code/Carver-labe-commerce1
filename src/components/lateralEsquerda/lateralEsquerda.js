import React from 'react';
import { ContainerLateralEsquerda } from './style'

export default LateralEsquerda = (props) => {

    return (
        <ContainerLateralEsquerda>
            <h1>Filtros</h1>
            <input placeholder="valor mínimo" />
            <input placeholder="valor máximo" />
            <input
                onChange={props.updateQuery}
                value={props.query}
                placeholder="Pesquisa"
            />
        </ContainerLateralEsquerda>
    )
}