import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { ListTodoComponent } from './components/ListTodoComponent'
import { TodoFormComponent } from './components/TodoFormComponent'
import { RegisterationComponent } from './components/RegisterationComponent'
import { LoginComponent } from './components/LoginComponent'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' Component={ListTodoComponent}></Route>
        <Route path='/todos' Component={ListTodoComponent}></Route>
        <Route path='/add-todo' Component={TodoFormComponent}></Route>
        <Route path='/update-todo/:id' Component={TodoFormComponent}></Route>
        <Route path='/register' Component={RegisterationComponent}></Route>
        <Route path='/login' Component={LoginComponent}></Route>
      </Routes>

      <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
