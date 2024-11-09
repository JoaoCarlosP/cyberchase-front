import { IDisciplina } from "../../utils/useDisciplina"

export enum EnumQuestionType {
  PA = 'avaliacao',
  PE = 'exercicio'
}

export type IQuestion = {
  disciplina: string
  descricao: string
  tipo: EnumQuestionType
  imagem: boolean
  audio: boolean
  tempo: boolean
  createdAt?: string
  key?: string
}

export interface IQuestionForm {
  disciplina?: IDisciplina
  disciplinaValue?: string
  tipo: string
  I: string | number
  A: string | number
  T: string | number
  C_A: string
  descricao: string
  arquivos?: string[]
  usuario: string
}
