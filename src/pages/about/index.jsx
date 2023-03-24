import { QueryClient, dehydrate } from 'react-query'
import { BlogList } from '@/src/components/organism'
import { fetchPosts } from '@src/hooks'

export default function Page() {
  return <BlogList />
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts()
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
