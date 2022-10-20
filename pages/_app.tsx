import "../styles/globals.css"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState
} from "@tanstack/react-query"
import type { AppProps } from "next/app"
import React from "react"

function MyApp({
  Component,
  pageProps
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
