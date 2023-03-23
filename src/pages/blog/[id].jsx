import { useRouter } from 'next/router'
import { getProduct } from '../api/getProduct'

const Post = ({ data }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <p>{data.title}</p>
    </>
  )
}
export async function getServerSideProps(context) {
  const data = await getProduct()
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Post
