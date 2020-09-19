import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { Header } from './Header'
import { ItemDetails } from './ItemDetails'
import { Spinner } from './Spinner'
import { fetchItem } from '../actions/item'
import { AppState } from '../types/app'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background: #F6F8FA;
    font-family: Open Sans, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`

export function App() {
  const { item } = useSelector((state: AppState) => state.item)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItem())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Header />
      {item ? <ItemDetails item={item} /> : <Spinner />}
    </>
  )
}
