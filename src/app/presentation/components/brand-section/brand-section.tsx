import { useRef } from 'react'
import styles from './brand-section.module.scss'
import { useParallax } from '@/app/presentation/hooks/use-parallax'
import { useIsMobile } from '@/app/presentation/hooks/use-is-mobile'
import logo from '../../assets/logo.svg'

interface BrandSectionProps {
  backgroundImage: string
  logoSrc?: string
  slogan?: string
  parallaxSpeed?: number
  id?: string
}

const BrandSection = ({
  backgroundImage,
  logoSrc = logo,
  slogan = 'O NOVO PADRÃO\nEM BANHEIROS VIP',
  parallaxSpeed = 0.375,
  id,
}: BrandSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()
  const parallaxOffset = useParallax(sectionRef, {
    speed: parallaxSpeed,
  })

  console.log('BrandSection parallaxOffset:', parallaxOffset)

  return (
    <section ref={sectionRef} className={styles.container} id={id}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: isMobile ? 'none' : `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      />
      <div className={styles.content}>
        <img src={logoSrc} alt="FreeCOBAN Logo" className={styles.logo} />
        <p className={styles.slogan}>{slogan}</p>
      </div>
    </section>
  )
}

export default BrandSection
