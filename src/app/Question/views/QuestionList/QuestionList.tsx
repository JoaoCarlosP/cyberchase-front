import { useNavigate } from "react-router-dom"
import Header from "../../../../components/Header/Header"
import { Path } from "../../../../routes/constants"
import { Button, Input } from "antd"
import { FunnelSimple, MagnifyingGlass, PencilSimpleLine, TrashSimple } from "@phosphor-icons/react"
import styles from "./QuestionList.module.scss"
import defaultStyles from '../../../../styles/default.module.scss'

function QuestionList() {
  const navigate = useNavigate()

  function onBack() {
    navigate(Path.menu)
  }

  const data = [
    {
      disciplina: 'PLA',
      pergunta: 'De acordo com o método Simplex, como podemos encontrar a resposta...',
      tipo: 'PA',
      imagem: true,
      audio: false,
      tempo: false,
      criado_em: '30/05/2024',
    },
    // Add more rows as needed
  ];

  return (
    <main className={defaultStyles.container}>
      <Header title="Perguntas" subtitle="As perguntas de ensino têm como objetivo ajudar o aluno a aprender novos conceitos abordados em sala de aula." onBack={onBack} ></Header>

      <div className={styles.filter}>
        <Input placeholder="Search" prefix={<MagnifyingGlass size={32} />} />
        <div>
          <FunnelSimple size={32} />
          <Button type="primary">Adicionar</Button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Identificador da pergunta (note)</th>
            <th>Tipo</th>
            <th>Imagem</th>
            <th>Áudio</th>
            <th>Tempo</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <span className={styles.badge}>{row.disciplina}</span>
              </td>
              <td>{row.pergunta}</td>
              <td>{row.tipo}</td>
              <td>{row.imagem ? 'Sim' : 'Não'}</td>
              <td>{row.audio ? 'Sim' : 'Não'}</td>
              <td>{row.tempo ? 'Sim' : 'Não'}</td>
              <td>{row.criado_em}</td>
              <td className={styles.actions}>
                <PencilSimpleLine size={32} />
                <TrashSimple size={32} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  )
}

export default QuestionList