import { useState } from 'react'
import ImagePopup from '../image-popup/image-popup'
import styles from './section-content.module.scss'

interface SectionContentProps {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  className?: string
}

const SectionContent = ({
  title,
  description,
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  className = '',
}: SectionContentProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleImageClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <>
      <div
        className={`${styles.container} ${
          imagePosition === 'left' ? styles.imageLeft : ''
        } ${className}`}
      >
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.imageContent}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles.image}
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleImageClick()
              }
            }}
          />
        </div>
      </div>

      <ImagePopup
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  )
}

export default SectionContent
