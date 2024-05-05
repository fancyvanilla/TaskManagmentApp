import './App.css'
import Home from './Components/Home';
import Todo from './Components/Todo';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import Authorized from './Components/Authorized';
import Profile from './Components/Profile';
import Pie from './Components/Pie';
import Signup from './Components/Signup';
import Stats from './Components/Stats';
import {useTaskManager} from './Components/useTaskManager';

function App() {
  const [tasks,addTodo,updateTodo,deleteTodo,getTodos]=useTaskManager();

  return(
    <div>
       <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Authorized' element={<Authorized/>}></Route>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/tasks/id/:id' element={<Home todos={tasks} addTodo={addTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} getTodos={getTodos}/>} />
      <Route path='/profile/id/:id'  element={<Profile todos={tasks}/>}/>
      <Route path='/stats/id/:id' element={<Stats todos={tasks}/>}/>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
