import styleList from '../../Question/views/QuestionList/QuestionList.module.scss'
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Tooltip } from "antd"
import dayjs from "dayjs";

const useColumns = () => {
  const columns = [
    {
      key: 'nome',
      title: 'Nome',
      dataIndex: 'nome',
      width: 80
    },
    {
      key: 'disciplinas',
      title: 'Disciplinas',
      dataIndex: 'disciplinas',
      width: 80,
      render: (disciplinas: Array<object>) => {
        return disciplinas.map((item: any) => <span style={{ marginRight: 4 }}>{item.disciplina}</span>)
      }
    },
    {
      key: 'email',
      title: 'email',
      width: 100,
      dataIndex: 'email',
      ellipsis: true,
      render: (value: string) => <Tooltip title={value}>{value}</Tooltip>
    },
    {
      key: 'createdAt',
      title: 'Criado em',
      dataIndex: 'createdAt',
      width: 60,
      render: (data: string) => dayjs(data).format('DD/MM/YYYY')
    },
    {
      key: 'actions',
      title: 'Ações',
      dataIndex: 'a',
      width: 30,
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
