import ky from 'ky-universal'
import { useQuery } from 'react-query'

const fetchPosts = async (limit = 10) => {
  // const parsed = await ky('https://jsonplaceholder.typicode.com/posts').json()
  // return parsed.filter((x) => x.id <= limit)
  // const parsed = await ky('https://jsonplaceholder.typicode.com/posts').json()
  const config = {
    headers: {
      Accept: 'application / json'
    }
  }
  const parsed = await fetch('http://localhost:3000/api/users')
    .then((res) => res.json())
    .catch((err) => console.log(err))
  return parsed
}

const usePosts = (limit) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
    staleTime: 60
  })
}

export { usePosts, fetchPosts }
