import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'
import { App } from './app'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
)
