import axios from "axios"
import { server } from "../config"

function API(serverURL: string) {
  const api = axios.create({
    baseURL: serverURL,
    timeout: 30000,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.xZ4LTM0siSRQMQ9Hq2zkENAj5lNsRN3OYd-A33N_8XY'
    }
  })

  api.defaults.headers.post['Content-Type'] = 'application/json'

  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  )

  return api
}

export const api = API(server)