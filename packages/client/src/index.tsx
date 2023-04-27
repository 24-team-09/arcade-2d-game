import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'

import App from './App'

const startServiceWorker = () => {
  if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then()
    })
  }
}

const requestNotificationPermission = () => {
  const permission = window.Notification.requestPermission()
}

startServiceWorker()
requestNotificationPermission()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)