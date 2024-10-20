import TableFilters from '../../../../components/TableFilters/TableFilters'
import defaultStyles from '../../../../styles/default.module.scss'
import Header from '../../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../../../routes/constants'
import Table from '../../../../components/Table/Table'
import useColumns from '../../hooks/useColumns'
import { useCallback, useEffect, useState } from 'react'
import { message } from 'antd'
import TeacherRepository from '../../../../repositories/TeacherRepository'

interface ITeacher {
  nome: string,
  disciplinas: Array<{ disciplina: string, color: string }>
  email: string
  createdAt: string
}

const teachersMock: ITeacher[] = [
  {
    nome: "Maria Silva",
    disciplinas: [
      { disciplina: "Matemática", color: "#FF5733" },
      { disciplina: "Física", color: "#33C1FF" }
    ],
    email: "maria.silva@example.com",
    createdAt: "2023-09-12"
  },
  {
    nome: "João Pereira",
    disciplinas: [
      { disciplina: "Química", color: "#FF33D4" },
      { disciplina: "Biologia", color: "#33FF57" }
    ],
    email: "joao.pereira@example.com",
    createdAt: "2023-05-21"
  },
  {
    nome: "Ana Costa",
    disciplinas: [
      { disciplina: "História", color: "#F3FF33" },
      { disciplina: "Geografia", color: "#3385FF" }
    ],
    email: "ana.costa@example.com",
    createdAt: "2024-01-18"
  }
];


function TeacherList() {
  const navigate = useNavigate()
  const columns = useColumns()

  const [loading, setLoading] = useState(false)

  const onBack = () => navigate(Path.menu)

  const getTeachers = useCallback(async () => {
    try {
      setLoading(true)
      const response = await TeacherRepository.list()
      // if (response?.data && Array.isArray(response?.data)) setData(response?.data)
      console.log(response?.data)
    } catch (error: any) {
      // setData(undefined)
      if (error) console.log(error)
      if (error?.message) message.error(error.message)
    } finally { setLoading(false) }
  }, [])

  useEffect(() => {
    getTeachers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onGoToCreateTeacher = () => navigate(Path.teacherForm.replace('/:id', ''))

  return (
    <main className={defaultStyles.backgroundGradient}>
      <article className={`${defaultStyles.cardInfinity}`}>
        <Header
          title="Professores"
          subtitle="Crie, edite ou verifique os professores criados no sistema, bem como suas respectivas disciplinas."
          onBack={onBack}
        />

        <TableFilters
          filters={<></>}
          onClickAdd={onGoToCreateTeacher}
          onSearch={() => console.log('buscar')}
        />

        <Table
          columns={columns}
          data={teachersMock}
          loading={loading}
        />
      </article>
    </main>
  )
}

export default TeacherList