import '@src/styles/globals.css'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { DefaultLayout as Layout } from '@components/layout'

const isServer = process.browser ? false : true

if (process.env.NODE_ENV === 'development') {
  if (isServer) {
    ;(async () => {
      const { server } = await import('../mocks/server')
      server.listen()
    })()
  } else {
    ;(async () => {
      const { worker } = await import('../mocks/browser')
      worker.start()
    })()
  }
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedSate}>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

function defaultLayout(page) {
  return <Layout>{page}</Layout>
}
