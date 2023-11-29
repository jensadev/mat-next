import UserButton from "./user-button";
import Link from 'next/link'

export default function Header() {
  return (
    <header className="primary-header content-grid">
      <div className="primary-header__layout breakout">
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/dishes">Dishes</Link>
            </li>
          </ul>
        </nav>
        <UserButton />
      </div>
    </header>
  )
}