import { Route, Routes } from 'react-router-dom'
import { Path } from './constants'
import UnauthPage from '../app/UnauthPage/UnauthPage'
import Menu from '../app/Menu/Menu'
import QuestionForm from '../app/Question/views/QuestionForm/QuestionForm'

function RootRoutes() {
  return (
    <Routes>
      <Route
        key={Path.unauth}
        path={Path.unauth}
        element={<UnauthPage />}
      />

      <Route
        key={Path.menu}
        path={Path.menu}
        element={<Menu />}
      />

      <Route
        key={Path.questionForm}
        path={Path.questionForm}
        element={<QuestionForm />}
      />
    </Routes>
  )
}

export default RootRoutes
