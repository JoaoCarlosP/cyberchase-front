import { AxiosRequestConfig } from 'axios'
import { Repository } from '../services/Repository'
import { api } from '../services/api'
import { ITeacherCreate } from '../app/Teacher/TeacherInterfaces'

class TeacherRepository extends Repository {
  list = async (config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.get(`${this.path}`, config)
    )
  }

  create = async (data: ITeacherCreate, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.post(`${this.path}`, data, config)
    )
  }
}

export default new TeacherRepository({
  path: 'api/usuarios',
  api: api
})