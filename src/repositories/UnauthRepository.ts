import { AxiosRequestConfig } from 'axios'
import { Repository } from '../services/Repository'
import { api } from '../services/api'

class UnauthRepository extends Repository {
  login = async (data: any, config?: AxiosRequestConfig) => {
    return this.handle(() =>
      this.api.post(`${this.path}/login`, data, config)
    )
  }
}

export default new UnauthRepository({
  path: 'unauth/web-push',
  api: api
})