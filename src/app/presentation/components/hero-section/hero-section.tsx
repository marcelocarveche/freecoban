import Section from '../section/section'
import { freecobanTrailer } from '../../assets'
import styles from './hero-section.module.scss'

const HeroSection = () => {
  return (
    <Section
      id="hero"
      backgroundImage={freecobanTrailer}
      height={600}
      className={styles.heroSection}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>FreeCoBan</h1>
        <p className={styles.slogan}>O NOVO PADRÃO EM BANHEIROS VIP</p>
      </div>
    </Section>
  )
}

export default HeroSection
