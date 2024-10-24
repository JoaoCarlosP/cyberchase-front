import { AxiosRequestConfig } from 'axios'
import { Repository } from '../services/Repository'
import { api } from '../services/api'

type IFile = {
  pergunta: string
  nome: string
  base64: string
}

class FileRepository extends Repository {
  create = async (data: IFile, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.post(`${this.path}`, data, config)
    )
  }

  find = async (fileId: string, config?: AxiosRequestConfig) => {
    return this.handle<{ base64: string, nome: string }>(() =>
      this.api.get(`${this.path}/${fileId}`, config)
    )
  }
}

export default new FileRepository({
  path: 'api/arquivos',
  api: api
})