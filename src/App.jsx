import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from './component/ListTodoComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoComponent from './component/TodoComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element={<ListTodoComponent></ListTodoComponent>}></Route>
          {/* http://localhost:8080/todos */}
          <Route path='/todos' element = { <ListTodoComponent></ListTodoComponent>}></Route>
          {/* http://localhost:8080/add-todo */}
          <Route path='/add-todo' element = { <TodoComponent></TodoComponent> }></Route>
          {/* http://localhost:8080/update-todo/1 */ }
          <Route path='/update-todo/:id' element={<TodoComponent></TodoComponent>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
