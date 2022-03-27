import React from 'react'
import styled from 'styled-components'

// Import assets
import 'modern-normalize/modern-normalize.css'
import Container from './components/Container.styled'
import GlobalStyle from './components/Global'

const App = () => (
  <Container>
    <h1>Hello!</h1>
    <p>Example site using Styled React Boilerplate!</p>
    <GlobalStyle />
  </Container>
)

export default App
