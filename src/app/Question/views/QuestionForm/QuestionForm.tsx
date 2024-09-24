import { useNavigate, useParams } from "react-router-dom"
import { ALTERNATIVES, CREATE_TEXT, EDIT_TEXT } from "../../questionConstants"
import { useForm } from "antd/es/form/Form"
import { Button, Col, Form, Input, Radio, Row, Select } from "antd"

import styles from './QuestionForm.module.scss'
import defaultStyles from '../../../../styles/default.module.scss'
import Header from "../../../../components/Header/Header"

function QuestionForm() {
  const { questionId } = useParams()
  const navigate = useNavigate()

  const header = {
    title: questionId ? EDIT_TEXT.title : CREATE_TEXT.title,
    subtitle: questionId ? EDIT_TEXT.subtitle : CREATE_TEXT.subtitle
  }

  const onBack = () => navigate(-1)

  return (
    <main className={defaultStyles.container}>
      <Header
        onBack={onBack}
        title={header.title}
        subtitle={header.subtitle}
      />

      <FormBuild />
    </main>
  )
}

function FormBuild() {
  const [formRef] = useForm()

  return (

    <Form form={formRef} layout="vertical">
      <Row gutter={[20, 5]}>
        <Col span={24}>
          <h4 className={styles.title}>Dados iniciais</h4>
        </Col>

        <Col span={24}>
          <Form.Item
            name='note'
            label='Identificador da pergunta'
          >
            <Input placeholder='Insira o identificador da questão' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='discipline'
            label='Disciplina'
          >
            <Select placeholder='Escolha a disciplina' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='questionTYpe'
            label='Tipo de pergunta'
          >
            <Select placeholder='Escolha o tipo de pergunta' />
          </Form.Item>
        </Col>

        <Col span={24}>
          <h4 className={styles.resourceTitle}>Recursos da Pergunta</h4>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='image'
          >
            {/* <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload> */}
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='audio'
          >
            To Do
          </Form.Item>
        </Col>

        <Col xs={24} md={12} className={styles.item}>
          <h4 className={styles.title}>Alternativa correta</h4>
          <Radio.Group
            className={styles.radioGroup}
            options={ALTERNATIVES}
          />
        </Col>

        <Col xs={24} md={12} className={styles.item}>
          <h4 className={styles.title}>Tempo para responder (opcional)</h4>
          <Input placeholder="Em segundos..." />
        </Col>
      </Row>

      <aside className={styles.button}>
        <Button type='primary' style={{ paddingRight: 40, paddingLeft: 40 }}>
          Salvar
        </Button>
      </aside>
    </Form>
  )
}

export default QuestionForm


