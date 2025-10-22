import { useState } from 'react'
import ImagePopup from '../image-popup/image-popup'
import ImageCarousel from '../image-carousel/image-carousel'
import styles from './section-content.module.scss'

interface SectionContentProps {
  title: string
  description: string
  listItems?: string[]
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  imageObjectFit?: 'cover' | 'contain'
  imageScale?: string // Exemplo: "100%", "150%", "200%"
  imagePositionX?: string // Exemplo: "0%", "50%", "-20%", "0px", "50px", "-20px"
  imagePositionY?: string // Exemplo: "0%", "30%", "-10%", "0px", "30px", "-10px"
  className?: string
  // Propriedades para carrossel
  carouselImages?: string[]
  carouselAlts?: string[]
  carouselInterval?: number
}

// Função para processar texto com negrito em Markdown (**texto**)
const processMarkdown = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

const SectionContent = ({
  title,
  description,
  listItems,
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  imageObjectFit = 'cover',
  imageScale = '100%',
  imagePositionX = '0%',
  imagePositionY = '0%',
  className = '',
  carouselImages,
  carouselAlts,
  carouselInterval = 5000,
}: SectionContentProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleImageClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  // Determinar se deve usar carrossel ou imagem única
  const useCarousel = carouselImages && carouselImages.length > 0

  return (
    <>
      <div
        className={`${styles.container} ${
          imagePosition === 'left' ? styles.imageLeft : ''
        } ${className}`}
      >
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{processMarkdown(description)}</p>
          {listItems && listItems.length > 0 && (
            <ul className={styles.list}>
              {listItems.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.imageContent}>
          {useCarousel ? (
            <ImageCarousel
              images={carouselImages}
              imageAlts={carouselAlts}
              interval={carouselInterval}
              imageObjectFit={imageObjectFit}
              imageScale={imageScale}
              imagePositionX={imagePositionX}
              imagePositionY={imagePositionY}
            />
          ) : (
            imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.image}
                style={{
                  objectFit: imageObjectFit,
                  transform: `scale(${parseFloat(imageScale) / 100}) translate(${imagePositionX}, ${imagePositionY})`,
                }}
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
            )
          )}
        </div>
      </div>

      {!useCarousel && imageSrc && (
        <ImagePopup
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </>
  )
}

export default SectionContent
