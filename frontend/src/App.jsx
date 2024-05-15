import React, { useState } from 'react'
// import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import {AppProvider} from './AppContext'
import Github_Login from './Components/Github_Login'

import './App.css'

import Home_header from './Components/Home_header'
import Home_sidebar from './Components/Home_sidebar'
import Home from './Components/Home'
import AddProject from './Components/AddProject'
import ManageGithubUser from './Components/ManageGithubUser'
import ManageProjects from './Components/ManageProjects'
import Project from './Components/Project'
import ViewProject from './Components/ViewProject'


const App = () => {
  return (

    <div>
      <BrowserRouter>
        <AppProvider>
          <SnackbarProvider>
            <Home_header />
            <Home_sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/authenticated/:githubusername" element={<Home />} />
              <Route path='/Github_Login' element={<Github_Login />} />
              <Route path='/AddProject' element={<AddProject />} />
              <Route path='/AddProject' element={<AddProject />} />
              <Route path='/ManageGithubUser' element={<ManageGithubUser />} />
              <Route path='/ManageProjects' element={<ManageProjects />} />
              <Route path='/Project' element={<Project />} />
              <Route path='/ViewProject/:id' element={<ViewProject />} />
          
            </Routes>
          </SnackbarProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
