import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Home from './Components/Home'
import Project from './Components/Project'
import AddProject from './Components/AddProject'
import './App.css'
import Main from './Components/Admin/Main'
import AdminAuth from './AdminAuth'
import Header from './Components/Admin/Header'
import Sidebar from './Components/Admin/Sidebar'
import Home_header from './Components/Home_header'
import ViewProject from './Components/ViewProject'
import Home_sidebar from './Components/Home_sidebar'
import { AppProvider } from './AppContext';
import UpdateProject from './Components/UpdateProject'
import USidebar from './Components/User/USidebar'
import UserDashboard from './Components/User/UserDashboard'
import UMain from './Components/User/UMain'
import ContactUs from './Components/ContactUs'
import AdminLogin from './Components/AdminLogin'
import UpdateTask from './Components/UpdateTask'
import ManageGithubUser from './Components/ManageGithubUser'
import AdminProfile from './Components/AdminProfile'
import Signup from './Components/Signup'
import AdminDashboard from './Components/Admin/AdminDashboard'
import UserProfile from './Components/UserProfile'
import Github_Login from './Components/Github_Login'
import UHeader from './Components/User/UHeader'
import ManageProjects from './Components/ManageProjects'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
            <Home_header />
            <Home_sidebar />
            {/* <Home_left_sidecol /> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/authenticated/:githubusername" element={<Home />} />
              <Route path='/Github_Login' element={<Github_Login />} />
              <Route path='/Project' element={<Project />} />
              <Route path='/AddProject' element={<AddProject />} />
              <Route path='/ContactUs' element={<ContactUs />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/AdminLogin' element={<AdminLogin />} />
              <Route path='/UpdateProject/:id' element={<UpdateProject />} />
              <Route path='/ViewProject/:id' element={<ViewProject />} />
              <Route path='/UpdateTask/:id' element={<UpdateTask />} />
              {/* <Route path='/ForgetPassword' element={<ForgetPassword />} /> */}
              

              <Route path='/Admin' element={<AdminAuth><Main /></AdminAuth>} >
                <Route path='Header' element={<Header />} />
                <Route path='Sidebar' element={<Sidebar />} />
                <Route path='AdminDashboard' element={<AdminDashboard />} />
                {/* <Route path='enrolledProject' element={<EnrolledProject />} /> */}
                <Route path='ManageProject' element={<ManageProjects />} />
                <Route path='ManageGithubUser' element={<ManageGithubUser />} />
                <Route path='AdminProfile' element={<AdminProfile />} />
                {/* <Route path='CountOfInterns' element={<CountOfInterns />} /> */}
              </Route>

              <Route path='/User' element={<UMain />} >
                <Route path='UHeader' element={<UHeader />} />
                <Route path='USidebar' element={<USidebar />} />
                <Route path='UserDashboard' element={<UserDashboard />} />
                <Route path='UserProfile' element={<UserProfile />} />
              </Route>



            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div >
  )
}

export default App