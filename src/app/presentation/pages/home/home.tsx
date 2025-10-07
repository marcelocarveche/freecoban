import {
  Header,
  HeroSection,
  Section,
  SectionContent,
  WhatsAppButton,
  InstagramButton,
  ContactSection,
  QuoteSection,
  BrandSection,
} from '../../components'
import styles from './home.module.scss'
import {
  freecobanTrailer,
  freecobanTrailer2,
  freecobanTrailer3,
  freecoTrailer,
  banheiroQuimico,
} from '../../assets'

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Primeira Seção - O detalhe que pode mudar seu evento */}
      <Section id="recursos" className={styles.section}>
        <SectionContent
          title="O detalhe que pode mudar seu evento"
          description="Os banheiros são um ponto chave na experiência de um convidado."
          listItems={[
            'Filas, mau cheiro, desconforto.',
            'Banheiros químicos comuns são um pesadelo.',
            'Isso afeta a experiência do público e a percepção da marca.',
          ]}
          imageSrc={banheiroQuimico}
          imageAlt="Banheiro químico tradicional"
          imagePosition="left"
        />
      </Section>

      {/* Segunda Seção - Citação */}
      <QuoteSection quote="E se até o banheiro fosse parte positiva da experiência?" />

      {/* Terceira Seção - Conforto e alto padrão */}
      <Section id="solucao" className={styles.section}>
        <SectionContent
          title=""
          description=""
          listItems={[
            'Conforto, estética e eficiência no que antes era um problema.',
            'Eventos de alto nível merecem soluções de alto padrão.',
          ]}
          imageSrc={freecobanTrailer2}
          imageAlt="FreeCOBAN - Solução de alto padrão"
          imagePosition="right"
          imageObjectFit="cover"
        />
      </Section>

      {/* Quarta Seção - Brand Section com Logo e Slogan */}
      <BrandSection backgroundImage={freecobanTrailer} />

      {/* Quinta Seção - Sobre o FreeCOBAN */}
      <Section id="sobre" className={styles.section}>
        <SectionContent
          title=""
          description=""
          listItems={[
            'Fusão entre TrailerBan + Freeco.',
            'Parte do ecossistema Freebrands.',
            'Especialistas em soluções sanitárias móveis para eventos premium há mais de 10 anos.',
          ]}
          imageSrc={freecoTrailer}
          imageAlt="FreeCOBAN - Ecossistema Freebrands"
          imagePosition="left"
          imageScale="100%" // Aumenta o zoom em 50%
          imagePositionX="0%" // Move 10% para a direita (em relação à largura)
          imagePositionY="0%" // Move 5% para cima (em relação à altura)
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
