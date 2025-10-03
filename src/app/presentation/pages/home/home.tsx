import styles from './home.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>FreeCOBAN</h1>
        <p className={styles.description}>
          Bem-vindo ao projeto FreeCOBAN. Este é um projeto base para
          desenvolvimento frontend.
        </p>
      </main>
    </div>
  )
}

export default HomePage
