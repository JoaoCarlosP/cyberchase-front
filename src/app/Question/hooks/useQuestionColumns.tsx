import useBreakpoint from "../../../hooks/useBreakpoint"
import { useMemo } from "react"
import styleList from '../views/QuestionList/QuestionList.module.scss'
import QuestionListRules from "../../../Rules/QuestionListRules"
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Modal, Tooltip } from "antd"
import { EnumQuestionType } from "../questionInterfaces";
import { IDisciplina } from "../../../utils/useDisciplina";
import DisciplinaTag from "../../../components/DisciplinaTag/DisciplinaTag";

const useQuestionColumns = ({ onDelete, onEdit }: { onDelete: (id: string) => void, onEdit: (id: string) => void }) => {
  const breakpoint = useBreakpoint()

  const canUseScroll = useMemo(() => QuestionListRules.canEnableTableScroll(breakpoint), [breakpoint])

  const columns = [
    {
      title: 'Disciplina',
      dataIndex: 'disciplina',
      width: 70,
      render: (data: IDisciplina) => <DisciplinaTag disciplina={data} />
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
      width: 80,
      dataIndex: 'tipo',
      render: (value: EnumQuestionType) => {
        switch (value) {
          case EnumQuestionType.PerguntaEnsino:
            return <Tooltip title='Pergunta de ensino'><span className={styleList.tipo}>Ensino</span></Tooltip>
          case EnumQuestionType.PerguntaExercicio:
            return <Tooltip title='Pergunta de exercicio'><span className={styleList.tipo}>Exercício</span></Tooltip>
          default: return 'N/A'
        }
      }
    },
    {
      title: 'Imagem',
      dataIndex: 'I',
      width: 60,
      render: (data: number) => data === 1 ? 'Sim' : 'Não'
    },
    {
      title: 'Áudio',
      dataIndex: 'A',
      width: 60,
      render: (data: number) => data === 1 ? 'Sim' : 'Não'
    },
    {
      title: 'Tempo',
      dataIndex: 'T',
      width: 60,
      render: (data: number) => data >= 1 ? 'Sim' : 'Não'
    },
    {
      title: 'Ações',
      dataIndex: 'a',
      width: 55,
      render: (_: any, row: any) => {
        const onClickDelete = () => {
          Modal.confirm({
            title: 'Confirmação',
            content: 'Você tem certeza que deseja deletar essa pergunta?',
            onOk: () => onDelete(row.id)
          })
        }

        return (
          <div className={styleList.actions}>
            <Tooltip title='Editar'>
              <EditFilled
                onClick={() => onEdit(String(row.id))}
                style={{ color: 'var(--green-status)', cursor: 'pointer' }}
              />
            </Tooltip>

            <Tooltip title='Deletar'>
              <DeleteFilled
                onClick={onClickDelete}
                style={{ color: 'var(--red-status)', cursor: 'pointer' }}
              />
            </Tooltip>
          </div>
        )
      }
    },
  ]

  return columns
}

export default useQuestionColumns
