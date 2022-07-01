import './App.css'
import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Resumes from './components/Resumes'
import Login from './components/Login'
import Signin from './components/Signin'
import Animation from './components/Animation'
import { useSelector } from 'react-redux'
import CompleteResume from './components/CompleteResume'
import CreateResume from './components/CreateResume'

function App() {
  const isNotLoggedIn = useSelector((state) => state.auth)

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Animation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          {!isNotLoggedIn && (
            <>
              <Route path="/resumes" element={<Resumes />} />
              <Route path="/resumes/:resumeId" element={<CompleteResume />} />
              <Route path="/resumes/create" element={<CreateResume />} />
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
