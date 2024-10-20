import { IDisciplina } from "../../utils/useDisciplina"

export interface ITeacher {
  nome: string,
  disciplinas: Array<IDisciplina>
  email: string
  createdAt: string
}

export interface ITeacherForm {
  nome: string
  email: string
  senha: string
  disciplinas: Array<string>
}

export interface ITeacherCreate extends Omit<ITeacherForm, 'disciplinas'> {
  disciplinas: Array<IDisciplina>
}