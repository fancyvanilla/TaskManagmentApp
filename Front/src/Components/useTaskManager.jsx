import React,{useState} from 'react'
import {getTasks,deleteTask,addTask, validateUser,getUser,updateTask} from "../Service/Service.js";


export const useTaskManager = () => {

    const [tasks,setTasks]=useState([])


    const getTodos=(id)=>{
        getTasks(id).then(response=>setTasks(response.data))
        .catch(error=>console.log(error))
        }
        const addTodo=(task)=>{
  
          addTask(task).then(response=>{
            console.log(response.data.message)
            if (response.data.status)
            {
              getTasks(task.userId)
              .then(response=>setTasks(response.data))
              .catch(error=>console.log(error))
            }
          })
          .catch(error=>console.log(error))
        }

        const updateTodo = (updatedTask)=>{
            updateTask(updatedTask)
            .then((response)=>
            {
              console.log("response:",response.data);
              return getTasks(updatedTask.userId)
            })
            .then(response=>setTasks(response.data))
            .catch(error=>console.log(error))
          }

          const deleteTodo = (userId,id) => {
            deleteTask(userId, id).then(response => {
              console.log(response.data.message);
              let newTodos = tasks.filter(todo => todo.id !== id);
              setTasks(newTodos);
            });
          }


  return [tasks,addTodo,updateTodo,deleteTodo,getTodos]
}

