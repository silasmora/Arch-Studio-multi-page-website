import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
  
)
