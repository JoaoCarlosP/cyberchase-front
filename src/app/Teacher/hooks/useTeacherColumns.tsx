import styleList from '../../Question/views/QuestionList/QuestionList.module.scss'
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Modal, Tooltip } from "antd"
import dayjs from "dayjs";
import { IDisciplina } from '../../../utils/useDisciplina';
import DisciplinaTag from '../../../components/DisciplinaTag/DisciplinaTag';
import TagMore from '../../../components/TagMore/TagMore';

const useTeacherColumns = ({ onDelete, onEdit }: {
  onDelete: (id: string) => void,
  onEdit: (id: string) => void
}) => {
  const columns = [
    {
      key: 'nome',
      title: 'Nome',
      dataIndex: 'nome',
      ellipsis: true,
      width: 90,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>
    },
    {
      key: 'disciplinas',
      title: 'Disciplinas',
      dataIndex: 'disciplinas',
      width: 70,
      render: (_: any, row: any) => {
        const disciplinas = row.disciplinas as Array<IDisciplina>
        const isMoreThanOne = disciplinas.length > 1
        const fistDisciplina = disciplinas[0]
        const restOfDisciplinas = disciplinas.slice(1)

        return (
          <div style={{ display: 'flex', gap: 6 }}>
            <DisciplinaTag disciplina={fistDisciplina} />
            {isMoreThanOne && (
              <TagMore
                additionalNumber={disciplinas.length - 1}
                tooltip={
                  <>
                    {restOfDisciplinas.map(disciplina => (
                      <p>{disciplina.sigla} - {disciplina.nomeCompleto}</p>
                    ))}
                  </>
                }
              />
            )}
          </div>
        )
      }
    },
    {
      key: 'email',
      title: 'email',
      width: 90,
      dataIndex: 'email',
      ellipsis: true,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>
    },
    {
      key: 'createdAt',
      title: 'Criado em',
      dataIndex: 'createdAt',
      width: 50,
      render: (data: string) => dayjs(data).format('DD/MM/YYYY')
    },
    {
      key: 'actions',
      title: 'Ações',
      dataIndex: 'a',
      width: 30,
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
                onClick={() => onEdit(row.id)}
                style={{ color: 'var(--green-status)', cursor: 'pointer' }}
              />
            </Tooltip>

            <Tooltip title='Deletar'>
              <DeleteFilled
                style={{ color: 'var(--red-status)', cursor: 'pointer' }}
                onClick={onClickDelete}
              />
            </Tooltip>
          </div>
        )
      }
    },
  ]

  return columns
}

export default useTeacherColumns
