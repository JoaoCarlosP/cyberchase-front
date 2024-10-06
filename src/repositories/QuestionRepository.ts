import { AxiosRequestConfig } from 'axios'
import { Repository } from '../services/Repository'
import { api } from '../services/api'
import { IQuestion } from '../app/Question/questionInterfaces'

class QuestionRepository extends Repository {
  list = async (config?: AxiosRequestConfig) => {
    return this.handle<Array<IQuestion>>(() =>
      this.api.get(`${this.path}`, config)
    )
  }
}

export default new QuestionRepository({
  path: 'api/perguntas',
  api: api
})