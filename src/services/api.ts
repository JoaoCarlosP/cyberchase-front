import axios from "axios"
import { server } from "../config"
import { UserLocalStorage, TOKEN_AUTHORIZATION } from "../AppConstants"

function API(serverURL: string) {
  const isUnauth = window.location.pathname === '/'
  const userId = localStorage.getItem(UserLocalStorage.userId)

  const canUseTokenAuthorization = userId || isUnauth
  const authorization = canUseTokenAuthorization ? TOKEN_AUTHORIZATION : undefined

  const api = axios.create({
    baseURL: serverURL,
    timeout: 30000,
    headers: { Authorization: authorization }
  })

  api.defaults.headers.post['Content-Type'] = 'application/json'

  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  )

  return api
}

export const api = API(server)
