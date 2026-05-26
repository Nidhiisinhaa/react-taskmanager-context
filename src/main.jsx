import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Hamara naya TaskProvider import kiya
import { TaskProvider } from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pure App ko Provider ke andar wrap kar diya */}
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
)