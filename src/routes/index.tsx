import { Route, Routes } from 'react-router-dom'
import { Path } from './constants'
import UnauthPage from '../app/UnauthPage/UnauthPage'
import Menu from '../app/Menu/Menu'

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
    </Routes>
  )
}

export default RootRoutes
