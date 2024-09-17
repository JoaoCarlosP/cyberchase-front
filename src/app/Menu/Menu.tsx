import { Button } from 'antd'
import styles from './Menu.module.scss'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../routes/constants'

function Menu() {
  const navigate = useNavigate()

  const onLogout = () => navigate(Path.unauth)

  const navigateToQuestionList = () => navigate(Path.questionList)
  const navigateToQuestionForm = () => navigate(Path.questionForm)

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h3 className={styles.title}>Menu de opções</h3>
        <p className={styles.subtitle}>Selecione a opção que você deseja acessar</p>

        <Button type='primary' className={styles.firstButton} onClick={navigateToQuestionList}>
          Listagem de perguntas
        </Button>

        <Button type='default' className={styles.secondButton} onClick={navigateToQuestionForm}>
          Adicionar nova pergunta
        </Button>

        <Button
          type='link'
          className={styles.logoutButton}
          onClick={onLogout}
        >
          Sair do sistema
        </Button>
      </section>
    </main>
  )
}

export default Menu