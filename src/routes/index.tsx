import { Route, Routes } from 'react-router-dom'
import { Path } from './constants'
import UnauthPage from '../app/UnauthPage/UnauthPage'

function RootRoutes () {
  return (
    <Routes>
      <Route
        key={Path.unauth}
        path={Path.unauth}
        element={<UnauthPage />}
      />
    </Routes>
  )
}

export default RootRoutes
