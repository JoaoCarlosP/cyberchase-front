import { useForm } from 'antd/es/form/Form'
import styles from './UnauthPage.module.scss'
import { Button, Col, Form, Input, Row } from 'antd'
// import UnauthRepository from '../../repositories/UnauthRepository'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../routes/constants'

function UnauthPage() {
  return (
    <main className={styles.container}>
      <Row className={styles.row}>
        <Col xs={0} md={12} xl={16}>
          <img
            alt="Fatec"
            className={styles.image}
            src="src/assets/fatec.png"
          />
        </Col>

        <Col xs={24} md={12} xl={8}>
          <LoginSection />
        </Col>
      </Row>
    </main>
  )
}

function LoginSection() {
  const [formRef] = useForm()
  const navigate = useNavigate()

  const onSubmit = () => navigate(Path.menu)

  return (
    <Form
      form={formRef}
      layout='vertical'
      onFinish={onSubmit}
      className={styles.form}
    >
      <section className={styles.formOverlay}>
        <h2 className={styles.title}>BEM VINDO!</h2>
        <p className={styles.subtitle}>Preencha os campos para acessar sua conta</p>

        <Form.Item
          name='email'
          label='E-mail'
        >
          <Input
            required
            type='email'
            placeholder='Insira o e-mail'
          />
        </Form.Item>

        <Form.Item
          label='Senha'
          name='password'
          style={{ marginBottom: 8 }}
        >
          <Input
            required
            type='password'
            placeholder='Insira o e-mail'
          />
        </Form.Item>

        <Button
          type='link'
          htmlType='button'
          className={styles.forgotPasswordButton}
        >
          Esqueci minha senha
        </Button>

        <Button
          type='primary'
          htmlType="submit"
          className={styles.loginButton}
        >
          Entrar
        </Button>

        <aside className={styles.dividerContainer}>
          <div className={styles.divider}></div>
          <span className={styles.alternativeAccess}>Ou baixe o jogo!</span>
          <div className={styles.divider}></div>
        </aside>

        <Button
          type='default'
          htmlType="button"
          className={styles.downloadGameButton}
        >
          Baixar jogo
        </Button>
      </section>
    </Form>
  )
}

export default UnauthPage