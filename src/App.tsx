import { BrowserRouter } from 'react-router-dom'
import { HttpsRedirect } from './providers/HttpsRedirect'
import RootRoutes from './routes'

import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <HttpsRedirect>
        <RootRoutes />
      </HttpsRedirect>
    </BrowserRouter>
  )
}

export default App