import styles from './service-types-section.module.scss'

export const ServiceTypesSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          DUAS LINHAS PARA EVENTOS DE TODOS OS TAMANHOS
        </h2>

        <div className={styles.servicesGrid}>
          {/* Trailers Banheiro VIP */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>a) TRAILERS BANHEIRO VIP</h3>
            <p className={styles.serviceDescription}>
              Ideal para eventos até 1.000 pessoas
            </p>
          </div>

          {/* Banheiros Modulares VIP */}
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>b) BANHEIROS MODULARES VIP</h3>
            <p className={styles.serviceDescription}>
              Para eventos com mais de 1.000 pessoas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
