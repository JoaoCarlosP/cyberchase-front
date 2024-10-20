import { Button, Col, Form, Input, message, Row, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useDisciplina } from '../../../../utils/useDisciplina'
import { useState } from 'react'
import TeacherRepository from '../../../../repositories/TeacherRepository'
import { ITeacherForm } from '../../TeacherInterfaces'
import { Path } from '../../../../routes/constants'

import { useNavigate, useParams } from "react-router-dom"
import defaultStyles from '../../../../styles/default.module.scss'
import Header from "../../../../components/Header/Header"
import { CREATE_TEXT, EDIT_TEXT } from '../../TeacherConstants'

function TeacherForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const header = {
    title: id ? EDIT_TEXT.title : CREATE_TEXT.title,
    subtitle: id ? EDIT_TEXT.subtitle : CREATE_TEXT.subtitle
  }

  const onBack = () => navigate(-1)

  return (
    <main className={defaultStyles.container}>
      <Header
        onBack={onBack}
        title={header.title}
        subtitle={header.subtitle}
      />

      <TeacherFormBody />
    </main>
  )
}


function TeacherFormBody() {
  const [formRef] = useForm()
  const navigate = useNavigate()

  const onBack = () => navigate(-1)

  const [loading, setLoading] = useState(false)

  const { disciplinas, options } = useDisciplina()

  const handleDisciplinas = (discip: Array<string>) => {
    return disciplinas.filter((obj) => discip.includes(obj.sigla));
  }

  const onSubmit = async (values: ITeacherForm) => {
    setLoading(true)
    try {
      const body = {
        ...values,
        disciplinas: handleDisciplinas(values.disciplinas)
      }

      await TeacherRepository.create(body)
      navigate(Path.teacherList)
    } catch (error: any) {
      if (error.message) message.error(error.message)
    } finally { setLoading(false) }
  }

  return (
    <Form
      form={formRef}
      onFinish={onSubmit}
      layout='vertical'
    >
      <Row gutter={[30, 20]}>
        <Col xs={24} md={12}>
          <Form.Item
            label='Nome'
            name='nome'
          >
            <Input placeholder='Insira o nome' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='disciplinas'
            label='Disciplina'
          >
            <Select
              allowClear
              showSearch
              mode='multiple'
              maxTagCount={1}
              options={options}
              maxTagTextLength={40}
              optionFilterProp="label"
              placeholder='Escolha a disciplina'
              onSelect={(_, option) => console.log(option)}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label='E-mail'
            name='email'
          >
            <Input type='email' placeholder='nome@email.com' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label='Senha'
            name='senha'
          >
            <Input type='password' placeholder='Insira a senha do professor' />
          </Form.Item>
        </Col>

        <aside
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Button
            type='default'
            onClick={onBack}
          >
            Cancelar
          </Button>

          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            disabled={loading}
            style={{ paddingRight: 35, paddingLeft: 35 }}
          >
            Salvar
          </Button>
        </aside>
      </Row>
    </Form>
  )
}

export default TeacherForm