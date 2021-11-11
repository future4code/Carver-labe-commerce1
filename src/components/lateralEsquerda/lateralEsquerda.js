import React from 'react';
import { ContainerLateralEsquerda } from './style'

export default LateralEsquerda = (props) => {
    return (
        <ContainerLateralEsquerda>
            <h1>Filtros</h1>
            <input 
                onChance={props.updateMinPrice}
                value={props.minPrice}
                placeholder="valor mínimo" />
            <input 
                onChance={props.updateMaxPrice}
                value={props.maxPrice}
                placeholder="valor máximo" />
            <input
                onChange={props.updateQuery}
                value={props.query}
                placeholder="Pesquisa"
            />
        </ContainerLateralEsquerda>
    )
}