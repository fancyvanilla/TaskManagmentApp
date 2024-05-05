import React, {useState} from 'react'
import Todo from './Todo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Todos = ({todos,setShowModal,userId,updateTodo,deleteTodo}) => {

const [filter, setFilter] = useState('all');


  let filteredTodos;

  switch (filter) {
    case 'completed':
      filteredTodos = todos.filter(todo => todo.done);
      break;
    case 'notCompleted':
      filteredTodos = todos.filter(todo => !todo.done);
      break;
    default:
      filteredTodos = todos;
  }

    let todosList = filteredTodos.map(todo=><Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} userId={userId}/>)

  return (
    <div className='p-4 todos m-4 text-white' >
            <div className='d-flex flex-row align-items-center justify-content-between'>
                <h2>Tasks</h2> 
                <div>
                    <i className="bi bi-pencil-square" onClick={()=>setShowModal(true)} style={{cursor:"pointer"}}  ></i>
                </div>
            </div>
                <div className='select'>
                <FormControl sx={{ m: 1, minWidth: 60 }}>
        <Select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{color:"white",border:"1px solid white",height:34,width:102}}
        >
          <MenuItem value={"all"}>all</MenuItem>
          <MenuItem value={"completed"}>done</MenuItem>
          <MenuItem value={"notCompleted"}>undone</MenuItem>
        </Select>
          <FormHelperText>Without label</FormHelperText>
            </FormControl>
                </div>
                <div className='mt-3 d-flex flex-column align-items-start'>
                    {todosList}
                </div>
    </div>
  )
}

export default Todos