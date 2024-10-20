import { Route, Routes } from 'react-router-dom'
import { Path } from './constants'
import UnauthPage from '../app/UnauthPage/UnauthPage'
import Menu from '../app/Menu/Menu'
import QuestionForm from '../app/Question/views/QuestionForm/QuestionForm'
import QuestionList from '../app/Question/views/QuestionList/QuestionList'
import TeacherList from '../app/Teacher/views/TeacherList/TeacherList'
import TeacherForm from '../app/Teacher/views/TeacherForm/TeacherForm'

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
        key={Path.questionList}
        path={Path.questionList}
        element={<QuestionList />}
      />

      <Route
        key={Path.questionForm}
        path={Path.questionForm}
        element={<QuestionForm />}
      />

      <Route
        key={Path.teacherList}
        path={Path.teacherList}
        element={<TeacherList />}
      />

      <Route
        key={Path.teacherForm}
        path={Path.teacherForm}
        element={<TeacherForm />}
      />
    </Routes>
  )
}

export default RootRoutes
