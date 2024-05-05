import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Category from './Category';
import DeleteTaskModal from './DeleteTaskModal';


const Todo = ({todo,updateTodo,deleteTodo,userId}) => {

const navigator=useNavigate();
const [task,setTask]=useState(todo);
const [showModal,setShowModal]=useState(false);

  const handleClick = () => {
    const updatedtask={...todo,done:!task.done,userId: userId};
    setTask(updatedtask);
    updateTodo(updatedtask);
  }
  
  return (
    <>
        <div className='d-flex todo w-100  flex-row align-items-center'>
                <div className='d-flex flex-column mt-1'>
                    <span style={{textDecoration:task.done ? 'line-through' : 'none',paddingTop:"10px"}} className='todotitle'>
                    <Checkbox checked={task.done} sx={{color:"white"}} onClick={handleClick}
                aria-label='check box for task completion'
                />
                    {task.text}
                    </span>
                    {todo.dueDate && 
                    <span className='date mx-5' >{todo.dueDate.substr(0,10)} 🕗</span>
                    }
                </div>
                <div className='mx-4'>
                {todo.category &&<Category category={todo.category}/>}
                </div>
                <div className='deleteButton d-flex align-items-center align-items-center' onClick={()=>setShowModal(true)} >
                    <FontAwesomeIcon icon={faTrash} />
                </div>
        </div>
        {showModal && <DeleteTaskModal showModal={showModal} setShowModal={setShowModal} deleteTodo={deleteTodo} userId={userId} todoId={todo.id} />}
        </>
  )
}
export default Todo

