import styles from './quote-section.module.scss'

interface QuoteSectionProps {
  quote: string
  className?: string
}

const QuoteSection = ({ quote, className = '' }: QuoteSectionProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        {/* Aspas de abertura */}
        <div className={styles.quoteIconTop}>&ldquo;</div>

        {/* Texto da citação */}
        <h2 className={styles.quote}>{quote}</h2>

        {/* Aspas de fechamento */}
        <div className={styles.quoteIconBottom}>&rdquo;</div>
      </div>
    </div>
  )
}

export default QuoteSection
