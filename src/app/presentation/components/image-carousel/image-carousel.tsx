import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import ImagePopup from '../image-popup/image-popup'
import styles from './image-carousel.module.scss'

interface ImageCarouselProps {
  images: string[]
  imageAlts?: string[]
  interval?: number // Intervalo em milissegundos
  imageObjectFit?: 'cover' | 'contain'
  imageScale?: string
  imagePositionX?: string
  imagePositionY?: string
}

const ImageCarousel = ({
  images,
  imageAlts = [],
  interval = 5000,
  imageObjectFit = 'cover',
  imageScale = '100%',
  imagePositionX = '0%',
  imagePositionY = '0%',
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [clickedImageIndex, setClickedImageIndex] = useState(0)

  // Troca automática de imagens
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const handleImageClick = (index: number) => {
    setClickedImageIndex(index)
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className={styles.carouselContainer}>
        <div
          className={styles.imageWrapper}
          onClick={() => handleImageClick(currentIndex)}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={imageAlts[index] || `Imagem ${index + 1}`}
              className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
              style={{
                objectFit: imageObjectFit,
                transform: `scale(${parseFloat(imageScale) / 100}) translate(${imagePositionX}, ${imagePositionY})`,
              }}
            />
          ))}
        </div>

        {/* Indicadores (dots) */}
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                handleDotClick(index)
              }}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isPopupOpen &&
        createPortal(
          <ImagePopup
            imageSrc={images[clickedImageIndex]}
            imageAlt={
              imageAlts[clickedImageIndex] || `Imagem ${clickedImageIndex + 1}`
            }
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
          />,
          document.body
        )}
    </>
  )
}

export default ImageCarousel
