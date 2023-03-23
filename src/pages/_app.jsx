import '@src/styles/globals.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { DefaultLayout as Layout } from '@components/layout'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || defaultLayout

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

function defaultLayout(page) {
  return <Layout>{page}</Layout>
}
