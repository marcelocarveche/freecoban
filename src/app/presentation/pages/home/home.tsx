import { Header, HeroSection, Section } from '../../components'
import styles from './home.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />

      {/* Seção Sobre */}
      <Section id="sobre" className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Sobre</h2>
          <p className={styles.sectionText}>
            O FreeCOBAN é uma plataforma inovadora que oferece soluções modernas
            e eficientes. Nossa missão é proporcionar a melhor experiência aos
            nossos usuários através de tecnologia de ponta.
          </p>
        </div>
      </Section>

      {/* Seção Contato */}
      <Section id="contato" className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Contato</h2>
          <p className={styles.sectionText}>
            Entre em contato conosco para saber mais sobre nossos serviços.
            Estamos aqui para ajudar você a alcançar seus objetivos.
          </p>
          <div className={styles.contactInfo}>
            <p>📧 contato@freecoban.com</p>
            <p>📱 (11) 99999-9999</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default HomePage
