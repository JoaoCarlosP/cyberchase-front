import { useNavigate } from "react-router-dom"
import Header from "../../../../components/Header/Header"
import { Path } from "../../../../routes/constants"
import { Button, Input, Table } from "antd"
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react"
import styles from "./QuestionList.module.scss"
import defaultStyles from '../../../../styles/default.module.scss'
import useColumns from "../../hooks/useColumns"
import { IQuestion } from "../../questionInterfaces"
import { useMemo } from "react"
import useBreakpoint from "../../../../hooks/useBreakpoint"
import QuestionListRules from "../../../../Rules/QuestionListRules"

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
  const onGoForm = () => navigate(Path.questionForm)

  return (
    <main className={styles.background}>
      <article className={`${defaultStyles.container} ${styles.contentContainer}`}>
        <Header title="Perguntas" subtitle="As perguntas de ensino têm como objetivo ajudar o aluno a aprender novos conceitos abordados em sala de aula." onBack={onBack} ></Header>

        <section className={styles.interactiveContainer}>
          <Input
            placeholder="Search"
            className={styles.inputSearch}
            prefix={<MagnifyingGlass size={16} />}
          />

          <div className={styles.buttons}>
            <Button type='default' className={styles.filterButton}>
              <FunnelSimple size={18} />
            </Button>

            <Button type="primary" className={styles.addButton} onClick={onGoForm}>
              Adicionar
            </Button>
          </div>
        </section>

        <Table<IQuestion>
          columns={columns}
          dataSource={data}
          className={styles.questionTable}
          scroll={{ x: canUseScroll || undefined }}
        />
      </article>
    </main>
  )
}

export default QuestionList