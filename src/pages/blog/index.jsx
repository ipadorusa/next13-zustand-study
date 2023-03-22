import { BlogList } from '@/src/components/organism'
import { getProduct } from '../api/getProduct'
import { Suspense, useEffect } from 'react'

export default function Page({ data }) {
  return (
    <Suspense>
      <BlogList data={data} />
    </Suspense>
  )
}

export async function getServerSideProps() {
  const data = await getProduct()
  return {
    props: { data }, // will be passed to the page component as props
  }
}
