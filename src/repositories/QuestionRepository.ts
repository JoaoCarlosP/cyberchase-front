import { AxiosRequestConfig } from 'axios'
import { Repository } from '../services/Repository'
import { api } from '../services/api'
import { IQuestion, IQuestionForm } from '../app/Question/questionInterfaces'

class QuestionRepository extends Repository {
  list = async (config?: AxiosRequestConfig) => {
    return this.handle<Array<IQuestion>>(() =>
      this.api.get(`${this.path}`, config)
    )
  }

  create = async (data: IQuestionForm, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.post(`${this.path}`, data, config)
    )
  }

  delete = async (questionId: string, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.delete(`${this.path}/${questionId}`, config)
    )
  }

  find = async (questionId: string, config?: AxiosRequestConfig) => {
    return this.handle<IQuestionForm>(() =>
      this.api.get(`${this.path}/${questionId}`, config)
    )
  }

  update = async (id: string, data: IQuestionForm, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.put(`${this.path}/${id}`, data, config)
    )
  }
}

export default new QuestionRepository({
  path: 'api/perguntas',
  api: api
})