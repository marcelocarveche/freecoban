import { useEffect, useState, useCallback } from 'react'
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
  const [isVisible, setIsVisible] = useState(false)

  // Função de fechamento com fade-out
  const handleClose = useCallback(() => {
    setIsVisible(false)
    // Aguarda a animação de fade-out antes de chamar onClose
    setTimeout(() => {
      onClose()
    }, 300) // Duração da animação fadeOut
  }, [onClose])

  // Gerencia a abertura com fade
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  // Previne scroll do body quando o popup está aberto
  useEffect(() => {
    if (isVisible) {
      // Apenas bloqueia o scroll, sem mudar position
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
    } else {
      // Restaura overflow
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isVisible])

  // Fecha ao pressionar ESC (sempre registrado, mas só age se isOpen)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, handleClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Só fecha se clicar diretamente no overlay (não em elementos filhos)
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={handleOverlayClick}
    >
      <button
        className={styles.closeButton}
        onClick={handleClose}
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
