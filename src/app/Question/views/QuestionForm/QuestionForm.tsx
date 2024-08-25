import { useParams } from "react-router-dom"
import { ALTERNATIVES, CREATE_TEXT, EDIT_TEXT } from "../../questionConstants"
import { useForm } from "antd/es/form/Form"
import { Form, Radio, Select } from "antd"

function QuestionForm() {
  const { questionId } = useParams()
  const header = {
    title: questionId ? EDIT_TEXT.title : CREATE_TEXT.title,
    subtitle: questionId ? EDIT_TEXT.subtitle : CREATE_TEXT.subtitle
  }

  return (
    <main>
      <header>
        <h3>{header.title}</h3>
        <p>{header.subtitle}</p>
      </header>

      <FormBuild />
    </main>
  )
}

function FormBuild() {
  const [formRef] = useForm()

  return (
    <Form form={formRef}>
      <h4>Dados iniciais</h4>

      <Form.Item
        name='discipline'
        label='Disciplina'
      >
        <Select placeholder='Escolha a disciplina' />
      </Form.Item>

      <Form.Item
        name='questionTYpe'
        label='Tipo de pergunta'
      >
        <Select placeholder='Escolha o tipo de pergunta' />
      </Form.Item>

      <h4>Recursos da Pergunta</h4>

      <p>TO DO</p>

      <h4>Alternativa correta</h4>

      <Radio.Group options={ALTERNATIVES} />

    </Form>
  )
}

export default QuestionForm