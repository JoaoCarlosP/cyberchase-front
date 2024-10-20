import { Button, Form, Input, message, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useDisciplina } from '../../../../utils/useDisciplina'
import { useState } from 'react'
import TeacherRepository from '../../../../repositories/TeacherRepository'
import { ITeacherForm } from '../../TeacherInterfaces'
import { Path } from '../../../../routes/constants'
import { useNavigate } from 'react-router-dom'

function TeacherForm() {
  const [formRef] = useForm()
  const navigate = useNavigate()

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
      <Form.Item
        label='Nome'
        name='nome'
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='E-mail'
        name='email'
      >
        <Input type='email' />
      </Form.Item>


      <Form.Item
        label='Senha'
        name='senha'
      >
        <Input type='password' />
      </Form.Item>

      <Form.Item
        name='disciplinas'
        label='Disciplina'
      >
        <Select
          showSearch
          mode='multiple'
          optionFilterProp="label"
          placeholder='Escolha a disciplina'
          options={options}
          maxTagCount={3}
          onSelect={(_, option) => console.log(option)}
        />
      </Form.Item>

      <Button
        type='primary'
        htmlType='submit'
        loading={loading}
        disabled={loading}
      >
        Salvar
      </Button>
    </Form>
  )
}

export default TeacherForm