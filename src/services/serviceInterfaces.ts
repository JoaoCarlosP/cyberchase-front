import { AxiosResponse } from 'axios'

export interface IResponseBase<T = unknown> extends AxiosResponse {
  data: {
    status: string
    code: number
    success: boolean
    message?: string
    data?: T
  }
}
