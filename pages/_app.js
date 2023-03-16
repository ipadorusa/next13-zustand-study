import Layout from '../components/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  )
}
