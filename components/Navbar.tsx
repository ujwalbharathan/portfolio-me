'use client'

interface NavbarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  // const pages = ['about', 'resume', 'portfolio', 'blog', 'contact']
  const pages = ['about', 'resume', 'contact']

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${activePage === page ? 'active' : ''}`}
              onClick={() => {
                setActivePage(page)
                window.scrollTo(0, 0)
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
