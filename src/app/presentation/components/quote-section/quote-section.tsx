import styles from './quote-section.module.scss'

interface QuoteSectionProps {
  quote: string
  className?: string
  listItems?: string[]
}

const QuoteSection = ({
  quote,
  className = '',
  listItems,
}: QuoteSectionProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        {/* Aspas de abertura */}
        <div className={styles.quoteIconTop}>&ldquo;</div>

        {/* Texto da citação */}
        <h2 className={styles.quote}>{quote}</h2>

        {/* Aspas de fechamento */}
        <div className={styles.quoteIconBottom}>&rdquo;</div>

        {/* Lista de itens opcional */}
        {listItems && listItems.length > 0 && (
          <ul className={styles.listItems}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default QuoteSection
