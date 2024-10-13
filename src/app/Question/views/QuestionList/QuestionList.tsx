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

function QuestionList() {
  const navigate = useNavigate()
  const columns = useQuestionColumns()
  const breakpoint = useBreakpoint()

  const [data, setData] = useState<Array<IQuestion> | undefined>([])
  const [loading, setLoading] = useState(false)

  const canUseScroll = useMemo(() => QuestionListRules.canEnableTableScroll(breakpoint), [breakpoint])
  const onBack = () => navigate(Path.menu)
  const onGoToCreateQuestion = () => navigate(Path.questionForm.replace('/:questionId', ''))

  const getQuestions = useCallback(async () => {
    try {
      setLoading(true)
      const response = await QuestionRepository.list()
      if (response?.data && Array.isArray(response?.data)) setData(response?.data)
    } catch (error: any) {
      setData(undefined)
      if (error) console.log(error)
      if (error?.message) message.error(error.message)
    } finally { setLoading(false) }
  }, [])

  useEffect(() => {
    getQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={defaultStyles.backgroundGradient}>
      <article className={`${defaultStyles.cardInfinity}`}>
        <Header title="Perguntas" subtitle="As perguntas de ensino têm como objetivo ajudar o aluno a aprender novos conceitos abordados em sala de aula." onBack={onBack} ></Header>

        <TableFilters
          onSearch={(value) => console.log(value)}
          filters={<p>Aqui irá os filtros</p>}
          onClickAdd={onGoToCreateQuestion}
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