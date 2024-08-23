import { useForm } from 'antd/es/form/Form'
import styles from './UnauthPage.module.scss'
import { Form } from 'antd'
import UnauthRepository from '../../repositories/UnauthRepository'

function UnauthPage() {
  const [formRef] = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await UnauthRepository.login(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.login}>
      <div className={styles.imageContainer}>
        <img src="src/assets/fatec.png" alt="Fatec" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>

      <Form form={formRef} className={styles.form} onFinish={onSubmit}>
        <h2 className={styles.title}>BEM VINDO!</h2>
        <p className={styles.subtitle}>Faça o login.</p>

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          required
        />

        <label htmlFor="senha" className={styles.label}>Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha"
          className={styles.input}
          style={{ marginBottom: '0.8rem' }}
          required
        />

        <button type='button' className={styles.forgotPasswordButton}>
          <b>Esqueci minha senha</b>
        </button>
        
        <button type="submit" className={styles.loginButton}>Entrar</button>
        
        <aside className={styles.dividerContainer}>
          <div className={styles.divider}></div>
          <span className={styles.alternativeAccess}>Ou baixe o jogo!</span>
          <div className={styles.divider}></div>
        </aside>

        <button type="button" className={styles.downloadGameButton}>
          Baixar jogo
        </button>
          
      </Form>
    </main>
  )
}

export default UnauthPage