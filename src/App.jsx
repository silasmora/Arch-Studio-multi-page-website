import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home } from './pages/Home'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
