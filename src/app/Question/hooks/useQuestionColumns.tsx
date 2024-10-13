import useBreakpoint from "../../../hooks/useBreakpoint"
import { useMemo } from "react"
import styleList from '../views/QuestionList/QuestionList.module.scss'
import QuestionListRules from "../../../Rules/QuestionListRules"
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Tooltip } from "antd"
import { EnumQuestionType } from "../questionInterfaces";

type IDisciplina = {
  cor: string
  nomeCompleto: string
  sigla: string
}

const useQuestionColumns = () => {
  const breakpoint = useBreakpoint()

  const canUseScroll = useMemo(() => QuestionListRules.canEnableTableScroll(breakpoint), [breakpoint])

  const columns = [
    {
      title: 'Disciplina',
      dataIndex: 'disciplina',
      width: 70,
      render: (data: IDisciplina) => (
        <span
          className={styleList.disciplinaTag}
          style={{
            borderColor: data.cor || '',
            color: data.cor || ''
          }}
        >
          {data.sigla}
        </span>
      )
    },
    {
      title: 'Identificador da pergunta',
      dataIndex: 'descricao',
      ellipsis: true,
      width: 250,
      render: (data: string) => {
        if (canUseScroll) {
          return (
            <Tooltip title={data} placement="topLeft">
              <span className={styleList.identificador}>{data}</span>
            </Tooltip>
          )
        } else return <Tooltip title={data} placement="topLeft">{data}</Tooltip>
      }
    },
    {
      title: 'Tipo',
      width: 50,
      dataIndex: 'tipo',
      render: (value: EnumQuestionType) => {
        switch (value) {
          case EnumQuestionType.PA: return <Tooltip title='Pergunta de avaliação'>PA</Tooltip>
          case EnumQuestionType.PE: return <Tooltip title='Pergunta de exercicio'>PE</Tooltip>
          default: return 'N/A'
        }
      }
    },
    {
      title: 'Imagem',
      dataIndex: 'imagem',
      width: 60,
      render: (data: boolean) => data ? 'Sim' : 'Não'
    },
    {
      title: 'Áudio',
      dataIndex: 'audio',
      width: 60,
      render: (data: boolean) => data ? 'Sim' : 'Não'
    },
    {
      title: 'Tempo',
      dataIndex: 'tempo',
      width: 60,
      render: (data: boolean) => data ? 'Sim' : 'Não'
    },
    {
      title: 'Ações',
      dataIndex: 'a',
      width: 55,
      render: () => (
        <div className={styleList.actions}>
          <Tooltip title='Editar'>
            <EditFilled style={{ color: 'var(--green-status)', cursor: 'pointer' }} />
          </Tooltip>

          <Tooltip title='Deletar'>
            <DeleteFilled style={{ color: 'var(--red-status)', cursor: 'pointer' }} />
          </Tooltip>
        </div>
      )
    },
  ]

  return columns
}

export default useQuestionColumns
