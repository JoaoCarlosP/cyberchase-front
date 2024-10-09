import { BrowserRouter } from 'react-router-dom'
import { HttpsRedirect } from './providers/HttpsRedirect'
import RootRoutes from './routes'

import './styles/index.scss'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <BrowserRouter>
        <HttpsRedirect>
          <RootRoutes />
        </HttpsRedirect>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App