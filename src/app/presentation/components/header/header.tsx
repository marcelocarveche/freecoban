import React, { useState } from 'react'
import styles from './header.module.scss'
import logo from '../../assets/logo.svg'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Header: React.FC<Props> = ({ ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault()

    // Fechar menu mobile ao clicar em um link
    setIsMobileMenuOpen(false)

    // Fazer scroll suave até a seção
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = 80 // Altura aproximada do header
      const offsetTop = section.offsetTop - headerHeight

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className={styles.container} {...props}>
      <div className={styles.content}>
        {/* Logo */}
        <a href="/" className={styles.logoContainer}>
          <img src={logo} alt="FreeCoBan Logo" className={styles.logo} />
        </a>

        {/* Navegação Desktop */}
        <nav className={styles.navigation}>
          <a
            href="#quem-somos"
            className={styles.navLink}
            onClick={(e) => handleLinkClick(e, 'quem-somos')}
          >
            Quem somos
          </a>
          <a
            href="#contato"
            className={styles.navLink}
            onClick={(e) => handleLinkClick(e, 'contato')}
          >
            Contato
          </a>
        </nav>

        {/* Menu Mobile */}
        <div className={styles.mobileMenu}>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                // Ícone X para fechar
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                // Ícone hambúrguer para abrir
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Navegação Mobile */}
          <nav
            className={`${styles.mobileNavigation} ${isMobileMenuOpen ? styles.isOpen : ''}`}
          >
            <a
              href="#quem-somos"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, 'quem-somos')}
            >
              Quem somos
            </a>
            <a
              href="#contato"
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, 'contato')}
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
