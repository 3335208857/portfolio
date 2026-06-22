import { useState, useEffect, useCallback } from 'react'
import '../styles/navbar.css'

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '优势', href: '#strengths' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on hash nav
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <a href="#hero" className="navbar-logo" onClick={closeMenu}>WJB</a>

      <div className={`navbar-links${menuOpen ? ' active' : ''}`}>
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} className="navbar-link" onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="navbar-cta" onClick={closeMenu}>联系我</a>
      </div>

      <button
        className={`navbar-hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>
    </nav>
  )
}
