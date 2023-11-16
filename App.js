import React, { useEffect } from 'react'
import Navigation from './src/reusableComponent/Stack'
import { NotificationListener, requestUserPermission } from './pushNotification'

const App = () => {

  useEffect(() => {
    requestUserPermission()
    NotificationListener()
  }, [])
  return (
    <Navigation />
  )
}
export default App
