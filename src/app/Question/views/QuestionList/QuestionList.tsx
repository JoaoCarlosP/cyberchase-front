import { useNavigate } from "react-router-dom"
import Header from "../../../../components/Header/Header"
import { Path } from "../../../../routes/constants"
import defaultStyles from '../../../../styles/default.module.scss'
import useQuestionColumns from "../../hooks/useQuestionColumns"
import { IQuestion } from "../../questionInterfaces"
import { useCallback, useEffect, useMemo, useState } from "react"
import useBreakpoint from "../../../../hooks/useBreakpoint"
import QuestionListRules from "../../../../Rules/QuestionListRules"
import Table from "../../../../components/Table/Table"
import TableFilters from "../../../../components/TableFilters/TableFilters"
import QuestionRepository from "../../../../repositories/QuestionRepository"
import { message } from "antd"
import { UserLocalStorage } from "../../../../AppConstants"

function QuestionList() {
  const navigate = useNavigate()
  const breakpoint = useBreakpoint()

  const [data, setData] = useState<Array<IQuestion> | undefined>([])
  const [loading, setLoading] = useState(false)

  const canUseScroll = useMemo(() => QuestionListRules.canEnableTableScroll(breakpoint), [breakpoint])
  const onBack = () => navigate(Path.menu)

  const getQuestions = useCallback(async (descricao?: string) => {
    try {
      setLoading(true)
      const isAdmin = localStorage.getItem(UserLocalStorage.isAdmin) === 'true'

      const params = {
        userId: localStorage.getItem(UserLocalStorage.userId),
        isAdmin: isAdmin,
        descricao
      }

      const response = await QuestionRepository.list({ params })
      if (response?.data && Array.isArray(response?.data)) setData(response?.data)
    } catch (error: any) {
      setData(undefined)
      if (error) console.log(error)
      if (error?.message) message.error(error.message)
    } finally { setLoading(false) }

  }, [])

  const onGoToQuestionForm = (id?: string) => {
    if (id) {
      navigate(Path.questionForm.replace(':questionId?', id))
    } else {
      navigate(Path.questionForm.replace('/:questionId?', ''))
    }
  }

  const onDelete = async (id: string) => {
    try {
      await QuestionRepository.delete(id)

      message.success('Pergunta deletada com sucesso')
      getQuestions()
    } catch (error: any) {
      if (error.message) message.error(error.message)
      console.error(error)
    }
  }

  const columns = useQuestionColumns({ onDelete, onEdit: onGoToQuestionForm })

  const onSearch = (descricao: string) => {
    getQuestions(descricao)
  }

  useEffect(() => {
    getQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={defaultStyles.backgroundGradient}>
      <article className={`${defaultStyles.cardInfinity}`}>
        <Header title="Perguntas" subtitle="As perguntas de ensino têm como objetivo ajudar o aluno a aprender novos conceitos abordados em sala de aula." onBack={onBack} ></Header>

        <TableFilters
          onSearch={onSearch}
          onClickAdd={() => onGoToQuestionForm()}
        />

        <Table
          data={data || []}
          loading={loading}
          columns={columns}
          canUseScroll={canUseScroll}
        />
      </article>
    </main>
  )
}

export default QuestionList