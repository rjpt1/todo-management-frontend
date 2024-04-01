import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from './component/ListTodoComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoComponent from './component/TodoComponent';
import RegisterComponent from './component/RegisterComponent';
import LoginComponent from './component/LoginComponent';
import { isUserLoggedIn } from './services/AuthService'


function App() {
  const [count, setCount] = useState(0)

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();

    if(isAuth){
      return children;
    }
    return <Navigate to="/" />
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
          {/* http://localhost:8080/todos */}
          <Route path='/todos' element = {
            <AuthenticatedRoute>
              <ListTodoComponent></ListTodoComponent>
            </AuthenticatedRoute> 
          }>
          </Route>
          {/* http://localhost:8080/add-todo */}
          <Route path='/add-todo' element = { 
            <AuthenticatedRoute>
              <TodoComponent></TodoComponent> 
            </AuthenticatedRoute>
          }>
          </Route>
          {/* http://localhost:8080/update-todo/1 */ }
          <Route path='/update-todo/:id' element={
            <AuthenticatedRoute>
              <TodoComponent></TodoComponent>
            </AuthenticatedRoute>
          }>
          </Route>

          {/* http://localhost:8080/register */ }
          <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
          {/* http://localhost:8080/login */ }
          <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
