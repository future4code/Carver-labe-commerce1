import React from 'react';
import { MainContainer, GlobalStyle } from './style'
import LateralEsquerda from './components/lateralEsquerda/lateralEsquerda'
import ConteudoCentral from './components/conteúdoCentral/conteudoCentral';
import LateralDireita from './components/lateralDireita/lateralDireita'

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <LateralEsquerda />
      <ConteudoCentral />
      <LateralDireita />
    </MainContainer>
  );
}

export default App;
