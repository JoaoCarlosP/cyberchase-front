import TableFilters from '../../../../components/TableFilters/TableFilters'
import defaultStyles from '../../../../styles/default.module.scss'
import Header from '../../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { Path } from '../../../../routes/constants'
import Table from '../../../../components/Table/Table'
import useTeacherColumns from '../../hooks/useTeacherColumns'
import { useCallback, useEffect, useState } from 'react'
import { message } from 'antd'
import TeacherRepository from '../../../../repositories/TeacherRepository'
import { ITeacher } from '../../TeacherInterfaces'


function TeacherList() {
  const navigate = useNavigate()
  const columns = useTeacherColumns()
  const [data, setData] = useState<Array<ITeacher> | undefined>(undefined)

  const [loading, setLoading] = useState(false)

  const onBack = () => navigate(Path.menu)

  const getTeachers = useCallback(async () => {
    try {
      setLoading(true)
      const response = await TeacherRepository.list()
      if (response?.data && Array.isArray(response?.data)) setData(response?.data)
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
          onClickAdd={onGoToCreateTeacher}
          onSearch={() => console.log('buscar')}
        />

        <Table
          columns={columns}
          data={data || []}
          loading={loading}
        />
      </article>
    </main>
  )
}

export default TeacherList