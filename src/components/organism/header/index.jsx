import Link from 'next/link'
import style from './header.module.scss'
import Ci from '@/public/assets/svg/ci.svg'
export default function Header() {
  return (
    <header id="sri_header" className={style.header}>
      <div className={style.area_logo}>
        <Link href="/about" className={style.link_saramin}>
          <span className="blind">사람인 메인으로 가기</span>
        </Link>
        <Link href="/blog" title="사람인 기업서비스 MUST" className={style.link_logo}>
          <Ci />
        </Link>
      </div>
    </header>
  )
}
