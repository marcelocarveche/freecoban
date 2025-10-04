import { useEffect } from 'react'
import styles from './image-popup.module.scss'

interface ImagePopupProps {
  imageSrc: string
  imageAlt?: string
  isOpen: boolean
  onClose: () => void
}

const ImagePopup = ({
  imageSrc,
  imageAlt = '',
  isOpen,
  onClose,
}: ImagePopupProps) => {
  // Previne scroll do body quando o popup está aberto
  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY

      // Desativa scroll em X e Y
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Restaura o scroll
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Fecha ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Só fecha se clicar diretamente no overlay (não em elementos filhos)
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Fechar"
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default ImagePopup
