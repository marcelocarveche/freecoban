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
  BenefitsSection,
  GallerySection,
} from '../../components'
import styles from './home.module.scss'
import {
  freecobanTrailer,
  freecobanTrailer2,
  freecobanTrailer3,
  freecoTrailer,
  banheiroQuimico,
  trailerVipExterior,
  banheirosModularesVip,
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

      {/* Sexta Seção - Tipos de Serviços */}
      <QuoteSection quote="Duas linhas para eventos de todos os tamanhos" />

      {/* Sétima Seção - Trailers Banheiro VIP */}
      <Section id="trailers-vip" className={styles.section}>
        <SectionContent
          title="Trailers Banheiro VIP"
          description="**Mobilidade, sofisticação e autonomia**"
          listItems={[
            'Modelos com 2 a 4 cabines',
            'Ar condicionado opcional',
            'Lavabos, LED, espelhos',
            'Gerador próprio e montagem rápida',
            'Ideal para casamentos, camarotes e eventos corporativos',
          ]}
          imageSrc={trailerVipExterior}
          imageAlt="Trailers Banheiro VIP"
          imagePosition="left"
          imageObjectFit="cover"
          imageScale="125%"
          imagePositionX="10%"
        />
      </Section>

      {/* Oitava Seção - Banheiros Modulares VIP */}
      <Section id="modulares-vip" className={styles.section}>
        <SectionContent
          title="Banheiros Modulares VIP"
          description="**Versatilidade para eventos de grande porte**"
          listItems={[
            'Módulos com acabamento VIP',
            'Lavatórios, ventilação e acessibilidade',
            'Design personalizável e identidade visual sob medida',
            'Ideal para festivais, feiras, shows',
          ]}
          imageSrc={banheirosModularesVip}
          imageAlt="Banheiros Modulares VIP"
          imagePosition="right"
          imageObjectFit="cover"
        />
      </Section>

      {/* Nona Seção - Benefícios e Diferenciais */}
      <BenefitsSection />

      {/* Décima Seção - Galeria de Imagens */}
      <GallerySection />

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
