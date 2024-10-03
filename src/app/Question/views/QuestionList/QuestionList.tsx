import { useNavigate } from "react-router-dom"
import Header from "../../../../components/Header/Header"
import { Path } from "../../../../routes/constants"
import defaultStyles from '../../../../styles/default.module.scss'
import useColumns from "../../hooks/useColumns"
import { IQuestion } from "../../questionInterfaces"
import { useMemo } from "react"
import useBreakpoint from "../../../../hooks/useBreakpoint"
import QuestionListRules from "../../../../Rules/QuestionListRules"
import Table from "../../../../components/Table/Table"
import TableFilters from "../../../../components/TableFilters/TableFilters"

const data: IQuestion[] = [
  {
    disciplina: 'PLA',
    identificador: 'De acordo com o método Simplex, como podemos encontrar a resposta da seguinte questão abaixo?',
    tipo: 'pa',
    imagem: true,
    audio: false,
    tempo: false,
    createdAt: '30/05/2024',
  },
  {
    disciplina: 'PLA',
    identificador: 'De acordo com o método Simplex, como podemos encontrar a resposta...',
    tipo: 'pa',
    imagem: true,
    audio: false,
    tempo: false,
    createdAt: '30/05/2024',
  },
  // Add more rows as needed
];

function QuestionList() {
  const navigate = useNavigate()
  const columns = useColumns()
  const breakpoint = useBreakpoint()

  const canUseScroll = useMemo(() => QuestionListRules.canEnableTableScroll(breakpoint), [breakpoint])
  const onBack = () => navigate(Path.menu)
  const onGoToCreateQuestion = () => navigate(Path.questionForm.replace('/:questionId', ''))

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
          data={data}
          columns={columns}
          canUseScroll={canUseScroll}
        />
      </article>
    </main>
  )
}

export default QuestionList