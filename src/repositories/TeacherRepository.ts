import { AxiosRequestConfig } from 'axios'
import { Repository } from '../services/Repository'
import { api } from '../services/api'
import { ITeacher, ITeacherCreate } from '../app/Teacher/TeacherInterfaces'

class TeacherRepository extends Repository {
  list = async (config?: AxiosRequestConfig) => {
    return this.handle<Array<ITeacher>>(() =>
      this.api.get(`${this.path}`, config)
    )
  }

  create = async (data: ITeacherCreate, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.post(`${this.path}`, data, config)
    )
  }

  update = async (id: string, data: ITeacherCreate, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.put(`${this.path}/${id}`, data, config)
    )
  }

  delete = async (questionId: string, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.delete(`${this.path}/${questionId}`, config)
    )
  }

  find = async (questionId: string, config?: AxiosRequestConfig) => {
    return this.handle<ITeacher>(() =>
      this.api.get(`${this.path}/${questionId}`, config)
    )
  }
}

export default new TeacherRepository({
  path: 'api/usuarios',
  api: api
})