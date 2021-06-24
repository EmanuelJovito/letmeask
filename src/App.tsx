import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { firebase, auth } from './services/firebase'

import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function App(): React.ReactElement {
  const [user, setUser] = useState<User>()

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  )
}
