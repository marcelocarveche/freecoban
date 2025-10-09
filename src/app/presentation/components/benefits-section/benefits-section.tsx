import styles from './benefits-section.module.scss'
import logo from '../../assets/logo.svg'

interface BenefitsSectionProps {
  className?: string
}

export const BenefitsSection = ({ className = '' }: BenefitsSectionProps) => {
  const benefits = [
    {
      icon: '🤝',
      text: 'Atendimento personalizado e suporte no evento',
    },
    {
      icon: '⚡',
      text: 'Soluções escaláveis com rápida montagem',
    },
    {
      icon: '💰',
      text: 'Preço competitivo e entrega nacional',
    },
    {
      icon: '🌱',
      text: 'Sustentabilidade e insumos biodegradáveis',
    },
    {
      icon: '⭐',
      text: 'Marca confiável: Freeco + Freebrands',
    },
  ]

  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.titleDesktop}>
            Conforto + Logística + Preço Justo
          </span>
          <span className={styles.titleMobile}>
            Conforto + Logística
            <br />+ Preço Justo
          </span>
        </h2>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.icon}>{benefit.icon}</span>
              <p className={styles.text}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
