import { IQuestion } from "../questionInterfaces"
import { ColumnsType } from "antd/es/table"
import useBreakpoint from "../../../hooks/useBreakpoint"
import { useMemo } from "react"
import styleList from '../views/QuestionList/QuestionList.module.scss'
import QuestionListRules from "../../../Rules/QuestionListRules"
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Tooltip } from "antd"

const useColumns = () => {
  const breakpoint = useBreakpoint()

  const canUseScroll = useMemo(() => QuestionListRules.canEnableTableScroll(breakpoint), [breakpoint])

  const columns: ColumnsType<IQuestion> = [
    {
      key: 'disciplina',
      title: 'Disciplina',
      dataIndex: 'disciplina',
      width: 70,
      render: (data) => (<span className={styleList.disciplinaTag}>{data}</span>)
    },
    {
      key: 'identificador',
      title: 'Identificador da pergunta',
      dataIndex: 'identificador',
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
      key: 'tipo',
      title: 'Tipo',
      width: 50,
      dataIndex: 'tipo',
    },
    {
      key: 'imagem',
      title: 'Imagem',
      dataIndex: 'imagem',
      width: 60,
      render: (data: boolean) => data ? 'Sim' : 'Não'
    },
    {
      key: 'audio',
      title: 'Áudio',
      dataIndex: 'audio',
      width: 60,
      render: (data: boolean) => data ? 'Sim' : 'Não'
    },
    {
      key: 'tempo',
      title: 'Tempo',
      dataIndex: 'tempo',
      width: 60,
      render: (data: boolean) => data ? 'Sim' : 'Não'
    },
    {
      key: 'actions',
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

export default useColumns
