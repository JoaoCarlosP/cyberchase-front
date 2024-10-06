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
  createdAt: string
  key: string
}