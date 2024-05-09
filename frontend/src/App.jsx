import React,{ useState } from 'react'
import Navbar from './Components/Navbar'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'

import Getstarted from './Components/Getstarted'
import { SnackbarProvider } from 'notistack'
import ContactPage from './Components/Contact'
import Projects from './Components/Projects'
import AdminDashboard from './Components/AdminDashboard'
import FeedbackPage from './Components/FeedpackPage'
import ProjectSignup from './Components/ProjectSignup'
import ProductPage from './Components/ProductPage'
import AppContext from './Components/AppContext'
import Github_Login from './Components/Github_Login'




  const App = () => {
    return (

          <div>
              <BrowserRouter>
              <SnackbarProvider>
              <Navbar />
              <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Getstarted" element={<Getstarted />} />
                  <Route path="/Contact" element={<ContactPage />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route path="/AdminDashboard" element={<AdminDashboard />} />
                  <Route path="/FeedbackPage" element={<FeedbackPage />} />
                  <Route path="/ProjectSignup" element={<ProjectSignup />} />
                  <Route path="/ProductPage" element={<ProductPage />} />
                  <Route path="/authenticated/:githubusername" element={<Home />} />
                  <Route path='/Github_Login' element={<Github_Login />} />
                  <Route path='/AppContext' element={<AppContext />} />
              </Routes>
              </SnackbarProvider>
              </BrowserRouter>
          </div>
  )
}

export default App
