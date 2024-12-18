// import { useState } from 'react'
import './App.css'
import BlogDetail from './Pages/BlogDetail'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog-detail/:id" element={<BlogDetail />}></Route>

      </Routes>
    
    </>
  )
}

export default App
