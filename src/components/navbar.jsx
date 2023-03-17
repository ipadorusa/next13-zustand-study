import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <Link href="/counter">counter</Link>
      <Link href="/about">about</Link>
    </div>
  )
}
