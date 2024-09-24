import { PencilSimpleLine, TrashSimple } from "@phosphor-icons/react"
import { IQuestion } from "../questionInterfaces"
import { ColumnsType } from "antd/es/table"

const useColumns = () => {
  const columns: ColumnsType<IQuestion> = [
    {
      key: 'disciplina',
      title: 'Disciplina',
      dataIndex: 'disciplina',
      width: 70
    },
    {
      key: 'identificador',
      title: 'Identificador da pergunta',
      dataIndex: 'identificador',
      ellipsis: true,
      width: 150,
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
      key: 'createdAt',
      title: 'Criado em',
      dataIndex: 'createdAt',
      width: 75
    },
    {
      key: 'actions',
      title: 'Ações',
      dataIndex: 'a',
      width: 75,
      render: () => (
        <div>
          <PencilSimpleLine />
          <TrashSimple />
        </div>
      )
    },
  ]

  return columns
}

export default useColumns
