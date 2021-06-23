import React from 'react'
import { NewRoom } from './pages/NewRoom'
// import { Home } from './pages/Home'

import './services/firebase'

import './styles/global.scss'

export function App(): React.ReactElement {
  return <NewRoom />
}
