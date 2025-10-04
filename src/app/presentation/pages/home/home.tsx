import {
  Header,
  HeroSection,
  Section,
  SectionContent,
  WhatsAppButton,
  InstagramButton,
  ContactSection,
} from '../../components'
import styles from './home.module.scss'
import { freecobanTrailer } from '../../assets'

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Seção Sobre - Exemplo com imagem à direita */}
      <Section id="sobre" className={styles.section}>
        <SectionContent
          title="Sobre o FreeCOBAN"
          description="O FreeCOBAN é uma plataforma inovadora que oferece soluções modernas e eficientes. Nossa missão é proporcionar a melhor experiência aos nossos usuários através de tecnologia de ponta."
          imageSrc={freecobanTrailer}
          imageAlt="Imagem sobre o FreeCOBAN"
          imagePosition="right"
        />
      </Section>

      {/* Seção Recursos - Exemplo com imagem à esquerda */}
      <Section id="recursos" className={styles.section}>
        <SectionContent
          title="Recursos Poderosos"
          description="Descubra todas as funcionalidades que temos a oferecer. Nossa plataforma foi desenvolvida pensando na sua necessidade de eficiência e praticidade."
          imageSrc="https://picsum.photos/500/400"
          imageAlt="Recursos da plataforma"
          imagePosition="left"
        />
      </Section>

      {/* Seção de Contato - Sempre a última */}
      <ContactSection
        email="contato@freecoban.com"
        phone="+55 11 99999-9999"
        whatsapp="5511999999999"
        instagram="freecoban"
      />

      {/* Botão flutuante do Instagram */}
      <InstagramButton username="freecoban" />
    </div>
  )
}

export default HomePage
