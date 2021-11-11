import React from 'react';
import { ContainerLateralEsquerda } from './style'


export default function LateralEsquerda(props) {
    return (
        <ContainerLateralEsquerda>
            <h1>🛸🚀 Filtros</h1>
            <input 
                type="number"
                onChance={props.updateMinPrice}
                value={props.minPrice}
                placeholder="valor mínimo" 
                />
            <input 
                type="number"
                onChance={props.updateMaxPrice}
                value={props.maxPrice}
                placeholder="valor máximo" 
                />
            <input
                type="text"
                onChange={props.updateQuery}
                value={props.query}
                placeholder="Pesquisa"
                />
        </ContainerLateralEsquerda>
    )
}

// O conteúdo de filtro abaixo ficar no App.js ja não deixei la pelo conflito

// {this.state.produtos
//     .filter(item => {
//        return item.name.toLowerCase().includes(this.state.query.toLowerCase())
//     })
//     .filter(item => {
//        return this.state.minPrice === "" || item.value >= this.state.minPrice
//     })
//     .filter(item => {
//        return this.state.maxPrice === "" || item.value <= this.state.maxPrice
//     })
//     .sort((currentItem, nextItem) => {
//        switch (this.state.sortingParameter) {
//           case "title":
//              return this.state.order * currentItem.title.localeCompare(nextItem.title)
//           default:
//              return this.state.order * (currentItem.value - nextItem.value)
//        }
//     })
//     .map(item => {
//        return <Card key={item.id} job={item} />
//     })}


//Tonalidades:
// #E8EBE4
// #D2D5DD
// #B8BACF
// #999AC6
// #798071