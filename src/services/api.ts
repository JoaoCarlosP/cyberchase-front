import axios from "axios"
import { server } from "../config"

function API(serverURL: string) {
  const api = axios.create({
    baseURL: serverURL,
    timeout: 30000,
  })

  api.defaults.headers.post['Content-Type'] = 'application/json'

  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  )

  return api
}

export const api = API(server)