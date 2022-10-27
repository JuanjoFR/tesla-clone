import { store } from "../library/store"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { Provider } from "react-redux"

function Application({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default Application
