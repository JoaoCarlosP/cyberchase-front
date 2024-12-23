import { useNavigate, useParams } from "react-router-dom"
import { ALTERNATIVES, CREATE_TEXT, EDIT_TEXT } from "../../questionConstants"
import { useForm } from "antd/es/form/Form"
import { Button, Col, Form, GetProp, Image, Input, message, Radio, Row, Select, Upload, UploadFile, UploadProps } from "antd"
import styles from './QuestionForm.module.scss'
import defaultStyles from '../../../../styles/default.module.scss'
import Header from "../../../../components/Header/Header"
import { useEffect, useState } from "react"
import { UploadRequestOption } from 'rc-upload/lib/interface'
import { FileImage, FileAudio } from "@phosphor-icons/react"
import QuestionRepository from "../../../../repositories/QuestionRepository"
import { EnumQuestionType, IQuestionForm } from "../../questionInterfaces"
import { Path } from "../../../../routes/constants"
import FileRepository from "../../../../repositories/FileRepository"
import { base64ToUploadFile, getFileType } from "../../../../utils/utils"
import { UserLocalStorage } from "../../../../AppConstants"
import { useSystem } from "../../../../hooks/useSystemContext"
import { DISCIPLINAS_DEFAULT } from "../../../../utils/useDisciplina"

function QuestionForm() {
  const { questionId } = useParams<{ questionId?: string }>()
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

      <FormBuild questionId={questionId} />
    </main>
  )
}


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

function FormBuild({ questionId }: { questionId?: string }) {
  const [formRef] = useForm()
  const navigate = useNavigate()
  const isEdit = !!questionId

  const [loading, setLoading] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewAudioUrl, setPreviewAudioUrl] = useState('')
  const [fileListImage, setFileListImage] = useState<UploadFile[]>([])
  const [fileListAudio, setFileListAudio] = useState<UploadFile[]>([])
  const [imageId, setImageId] = useState('')
  const [audioId, setAudioId] = useState('')

  const { disciplinaOptions } = useSystem()

  const getDisciplinaSelected = (value?: string) => {
    if (!value) return
    return DISCIPLINAS_DEFAULT.find(item => item.sigla === value)
  }

  const updateFile = async (file: string, nome: string, fileId?: string) => {
    if (!fileId) throw new Error("Não foi possível encontrar o id do arquivo a ser alterado")
    if (!questionId) throw new Error("Não foi possível encontrar o id da pergunta para alterar o arquivo")

    const data = {
      pergunta: questionId,
      base64: file,
      nome: nome || 'Novo arquivo'
    }

    try {
      await FileRepository.update(fileId, data)
      message.success('Arquivo alterado com sucesso!')
    } catch (error: any) {
      message.error(error.message || 'Erro ao salvar novo arquivo')
    }
  }

  const submitFile = async (file: string, nome: string, questionId: string) => {
    try {
      const data = {
        pergunta: questionId,
        base64: file,
        nome: nome || 'Novo arquivo'
      }

      await FileRepository.create(data)
      return true
    } catch (error: any) {
      console.error(error)
      if (error.message) message.error(error.message)
    }
  }

  const onSubmit = async (values: IQuestionForm) => {
    setLoading(true)
    try {
      const body = {
        ...values,
        disciplina: getDisciplinaSelected(values.disciplinaValue),
        I: values.I ? 1 : 0,
        A: values.A ? 1 : 0,
        // A rota para criar e relacionar o arquivo é outra, aqui pode enviar vazio
        arquivos: [],
        usuario: String(localStorage.getItem(UserLocalStorage.userId))
      }

      delete body.disciplinaValue

      let response: any
      if (isEdit) {
        response = await QuestionRepository.update(questionId, body)
      } else {
        response = await QuestionRepository.create(body)
      }

      const perguntaId = response?.data?.id || null

      if (!isEdit) {
        if (values.I) await submitFile(String(values.I), fileListImage[0].name, perguntaId)
        if (values.A) await submitFile(String(values.A), fileListAudio[0].name, perguntaId)
      }

      message.success('Disciplina criada com sucesso!')
      navigate(Path.questionList)
    } catch (error: any) {
      message.error(error?.mensagem)
    } finally { setLoading(false) }
  }

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleChange: UploadProps['onChange'] = (info) => {
    setFileListImage(info.fileList)

    if (info.fileList.length > 0) {
      const file = info.fileList[0]
      if (!file.url && !file.preview) {
        getBase64(file.originFileObj as FileType).then((base64) => {
          file.preview = base64
          setPreviewImage(base64)
          setPreviewOpen(true)
          formRef.setFieldsValue({ I: base64 })

          if (isEdit) updateFile(base64, file.name, imageId)
        })
      } else {
        setPreviewImage(file.url || (file.preview as string))
        setPreviewOpen(true)
        formRef.setFieldsValue({ I: file.url || (file.preview as string) })
      }
    } else {
      setPreviewImage('')
      setPreviewOpen(false)
      formRef.setFieldsValue({ I: null })
    }
  }

  const handleChangeAudio: UploadProps['onChange'] = (info) => {
    setFileListAudio(info.fileList)

    if (info.fileList.length > 0) {
      const file = info.fileList[0]
      if (!file.url && !file.preview) {
        getBase64(file.originFileObj as FileType).then((base64) => {
          file.preview = base64
          setPreviewAudioUrl(base64)
          formRef.setFieldsValue({ A: base64 })

          if (isEdit) updateFile(base64, file.name, audioId)
        })
      } else {
        setPreviewAudioUrl(file.url || (file.preview as string))
        formRef.setFieldsValue({ A: file.url || (file.preview as string) })
      }
    } else {
      setPreviewAudioUrl('')
      formRef.setFieldsValue({ A: null })
    }
  }

  async function customUploadRequest(options: UploadRequestOption<any>) {
    const { file, onSuccess, onError } = options
    if (onSuccess) {
      onSuccess({
        success: true,
        status: 'done'
      }, file as any)
      return true
    }
    if (onError) {
      onError({ name: 'Error', message: 'Não foi possível fazer o upload do arquivo' })
      message.error('Não foi possível fazer o upload do arquivo, tente novamente', 7)
      return false
    }
    return true
  }

  const handleFile = (base64: string, fileName: string = '', fileId: string) => {
    const fileType = getFileType(base64)
    const fileObject = base64ToUploadFile(base64, fileName)

    if (fileType === 'image') {
      formRef.setFieldsValue({ I: base64 })
      setImageId(fileId)
      setFileListImage((prev) => [...prev, fileObject])
      setPreviewImage(base64)
    }
    if (fileType === 'audio') {
      formRef.setFieldsValue({ A: base64 })
      setAudioId(fileId)
      setPreviewAudioUrl(base64)
      setFileListAudio(prev => [...prev, fileObject])
    }
  }


  const getFile = async (fileId: string) => {
    try {
      const response = await FileRepository.find(fileId)
      const file = response?.data || {}
      if (file.base64) handleFile(file.base64, file.nome, file.id)
    } catch (error: any) {
      if (error.message) console.error(error.message)
    }
  }

  const handleQuestionData = (data: IQuestionForm) => {
    if (data.arquivos && data.arquivos.length > 0) {
      data.arquivos.forEach(fileId => {
        if (fileId) getFile(fileId)
      })
    }

    formRef.setFieldsValue({ ...data, disciplinaValue: data.disciplina?.sigla || '', T: Number(data?.T) / 60 })
  }

  const getQuestionData = async (id: string) => {
    try {
      const response = await QuestionRepository.find(id)
      const questionData = response?.data
      if (questionData) handleQuestionData(questionData)
    } catch (error: any) {
      if (error.message) console.error(error.message)
    }
  }

  useEffect(() => {
    if (questionId) getQuestionData(questionId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId])

  return (
    <Form form={formRef} layout="vertical" onFinish={onSubmit}>
      <p onClick={() => getQuestionData(questionId || '')}>Clica aqui pra buscar</p>
      <Row gutter={[20, 5]}>
        <Col span={24}>
          <h4 className={styles.title}>Dados iniciais</h4>
        </Col>

        <Col span={24}>
          <Form.Item
            required
            name='descricao'
            label='Identificador da pergunta'
          >
            <Input placeholder='Insira o identificador da questão' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            required
            name='disciplinaValue'
            label='Disciplina'
          >
            <Select
              showSearch
              optionFilterProp="label"
              placeholder='Escolha a disciplina'
              options={disciplinaOptions}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            required
            name='tipo'
            label='Tipo de pergunta'
          >
            <Select
              placeholder='Escolha o tipo de pergunta'
              options={[
                { label: 'Pergunta de Ensino', value: EnumQuestionType.PerguntaEnsino },
                { label: 'Pergunta de Exercício', value: EnumQuestionType.PerguntaExercicio }
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <h4 className={styles.resourceTitle}>Recursos da Pergunta</h4>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='I'
            required
            label='Imagem'
          >
            <Upload
              listType="picture-card"
              fileList={fileListImage}
              maxCount={1}
              customRequest={customUploadRequest}
              accept="image/*"
              beforeUpload={(file) => {
                return new Promise((resolve, reject) => {
                  if (file.size > 4000000) {
                    reject('Excedeu o tamanho máximo de 4MB')
                  } else {
                    resolve('Imagem carregada com sucesso!')
                  }
                })
              }}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileListImage.length > 0
                ? null
                :
                <Button htmlType="button" style={{ width: '100%', height: '100%' }}>
                  <FileImage size={40} />
                </Button>
              }
            </Upload>

            {previewImage && (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            name='A'
            label='Áudio'
          >
            <Upload
              listType={previewAudioUrl ? 'text' : 'picture-card'}
              fileList={fileListAudio}
              maxCount={1}
              accept="audio/*"
              onPreview={() => null}
              customRequest={customUploadRequest}
              beforeUpload={(file) => {
                return new Promise((resolve, reject) => {
                  if (file.size > 10000000) {
                    reject('Excedeu o tamanho máximo de 10MB')
                  } else {
                    resolve('Áudio carregado com sucesso!')
                  }
                })
              }}
              onChange={handleChangeAudio}
            >
              {fileListAudio.length > 0
                ? null
                :
                <Button htmlType="button" style={{ width: '100%', height: '100%' }}>
                  <FileAudio size={40} />
                </Button>
              }
            </Upload>

            {previewAudioUrl && (
              <audio
                controls
                src={previewAudioUrl}
                style={{ width: '100%', marginTop: '1rem' }}
              />
            )}
          </Form.Item>
        </Col>

        <Col xs={24} md={12} className={styles.item}>
          <h4 className={styles.title}>Alternativa correta</h4>

          <Form.Item
            name='C_A'
            required
          >
            <Radio.Group
              className={styles.radioGroup}
              options={ALTERNATIVES}
            />
          </Form.Item>
        </Col>

        <Col xs={24} md={12} className={styles.item}>
          <h4 className={styles.title}>Tempo (em segundos)</h4>
          <Form.Item
            name='T'
            required
          >
            <Input placeholder="Em segundos..." type='number' />
          </Form.Item>
        </Col>
      </Row>

      <aside className={styles.button}>
        <Button
          type='primary'
          htmlType="submit"
          loading={loading}
          style={{ paddingRight: 40, paddingLeft: 40 }}
        >
          Salvar
        </Button>
      </aside>
    </Form>
  )
}

export default QuestionForm