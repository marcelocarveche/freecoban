import { useState, useRef, useEffect } from 'react'
import styles from './gallery-section.module.scss'
import { useIsMobile } from '@/app/presentation/hooks/use-is-mobile'
import {
  trailerVascoDaGama,
  trailerGravacaoAudioVisual,
  banheirosModularesVip,
  trailerFreeco,
} from '@/app/presentation/assets'

interface GalleryItem {
  image: string
  title: string
  description: string
}

interface GallerySectionProps {
  className?: string
}

export const GallerySection = ({ className = '' }: GallerySectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Função para processar descrição e separar a informação da foto
  const renderDescription = (description: string) => {
    const parts = description.split(' - foto: ')
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className={styles.photoInfo}>Foto: {parts[1]}</span>
        </>
      )
    }
    return description
  }

  const galleryItems: GalleryItem[] = [
    {
      image: trailerVascoDaGama,
      title: 'C.R. VASCO DA GAMA',
      description:
        'Usado para recepção das famílias e jogadores em festas após os jogos - foto: Estádio São Januário',
    },
    {
      image: trailerGravacaoAudioVisual,
      title: 'GRAVAÇÕES AUDIOVISUAIS',
      description:
        'Usado para produtores e elenco durante o tempo de gravação - foto: cast comercial Betano',
    },
    {
      image: banheirosModularesVip,
      title: 'CAMARIM DE SHOWS',
      description:
        'Usado para atender os artistas e seus convidados em áreas e festivais - foto: Jorge e Matheus em SP',
    },
    {
      image: trailerFreeco,
      title: 'ATIVAÇÕES DE MARCA',
      description:
        'Usado para marcas com experiência Premium - foto: FreeCO no Carnaval do Rio',
    },
  ]

  // Define quantos cards mostrar por vez baseado na largura
  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        // Desktop: 2 cards, Mobile: 1 card
        if (width >= 768) {
          setCardsPerView(2)
        } else {
          setCardsPerView(1)
        }
      }
    }

    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const step = cardsPerView === 2 ? 2 : 1
      return Math.max(0, prev - step)
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const step = cardsPerView === 2 ? 2 : 1
      const maxIndex = Math.max(0, galleryItems.length - cardsPerView)
      return Math.min(maxIndex, prev + step)
    })
  }

  // Verifica se os botões devem estar desabilitados
  const maxIndex = Math.max(0, galleryItems.length - cardsPerView)
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex >= maxIndex

  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>FreeCôBan no Mercado</h2>

        <div className={styles.galleryWrapper} ref={containerRef}>
          <div className={styles.carousel}>
            <button
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={handlePrev}
              disabled={isAtStart}
              aria-label="Imagem anterior"
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className={styles.carouselTrack}>
              <div
                className={styles.carouselSlides}
                style={{
                  transform:
                    cardsPerView === 2
                      ? `translateX(calc(-${currentIndex * 40}% - ${currentIndex * 20}px + 10%))`
                      : `translateX(calc(-${currentIndex * 75}% - ${currentIndex * 15}px + 12.5%))`,
                }}
              >
                {galleryItems.map((item, index) => (
                  <div key={index} className={styles.carouselSlide}>
                    <div className={styles.galleryCard}>
                      <div className={styles.imageWrapper}>
                        <img
                          src={item.image}
                          alt={item.description}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.description}>
                          {renderDescription(item.description)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={handleNext}
              disabled={isAtEnd}
              aria-label="Próxima imagem"
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
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Indicadores */}
            <div className={styles.indicators}>
              {Array.from({
                length: Math.ceil(galleryItems.length / cardsPerView),
              }).map((_, groupIndex) => {
                const slideIndex = groupIndex * cardsPerView
                return (
                  <button
                    key={groupIndex}
                    className={`${styles.indicator} ${
                      currentIndex === slideIndex ? styles.active : ''
                    }`}
                    onClick={() => setCurrentIndex(slideIndex)}
                    aria-label={`Ir para grupo ${groupIndex + 1}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
