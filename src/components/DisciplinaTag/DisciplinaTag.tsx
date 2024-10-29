import { IDisciplina, useDisciplina } from '../../utils/useDisciplina'
import styles from './DisciplinaTag.module.scss'
import { Tooltip } from 'antd'

function DisciplinaTag({ disciplina }: { disciplina: IDisciplina }) {
  const { disciplinas } = useDisciplina()

  const returnCurrentColorTag = (sigla: string = '') => {
    const disciplina = disciplinas.find(item => item.sigla === sigla)
    return disciplina?.cor || 'black'
  }

  return (
    <Tooltip title={disciplina.nomeCompleto}>
      <span
        className={styles.disciplinaTag}
        style={{
          color: 'white',
          background: returnCurrentColorTag(disciplina.sigla)
        }}
      >
        {disciplina.sigla}
      </span>
    </Tooltip>
  )
}

export default DisciplinaTag