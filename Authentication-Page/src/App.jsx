import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import RequireAuth from './Auth/RequireAuth'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Register</Link>
          {"  "}
          <Link to="/login">Login</Link>
          {"  "}
          <Link to="/home">Home</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={
            <RequireAuth>
              <Home/>
            </RequireAuth>} />
        </Routes>
      </main>

    </>
  )
}

export default App