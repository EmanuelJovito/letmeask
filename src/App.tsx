import { BrowserRouter, Route } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'

import { AuthContextProvider } from './contexts/AuthContext'

export function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  )
}
