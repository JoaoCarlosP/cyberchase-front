import styles from './Header.module.scss'
import { ArrowLeft } from '@phosphor-icons/react'

function Header({ title, subtitle, onBack }: { title: string, subtitle: string, onBack?: () => void }) {
  return (
    <>
      {onBack && (
        <button
          type='button'
          onClick={onBack}
          className={styles.buttonBack}
        >
          <ArrowLeft /> <span>Voltar</span>
        </button>
      )}
      <header className={styles.header}>
        <h3 className={styles.mainTitle}>{title}</h3>
        <p>{subtitle}</p>
      </header>
    </>
  )
}

export default Header