import { useState,useEffect,useRef } from 'react'
import SideBar from './SideBar';
import { useNavigate,useParams } from 'react-router-dom'
import Navbar from './Navbar.jsx';
import {getUser,validateUser} from "../Service/Service.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTask from './AddTaskModal.jsx';
import Todos from './Todos.jsx';
import Notifications from './Notifications.jsx';


const Home=({todos,addTodo,updateTodo,deleteTodo,getTodos})=>

 {  
    const [clickedDate, setClickedDate] = useState(false)
    const [username,setUsername]=useState("");
    const [showModal, setShowModal] = useState(false);


    const calendarRef = useRef();
    const navigator=useNavigate();
    const { id } = useParams();
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setClickedDate(false);
      }
    }
    const checkIfAuthorized=()=>{
      let token=localStorage.getItem('token');
      if (!token){
        navigator('/Authorized')
        return;
      }

    validateUser(id,token).then(response=>{
      console.log(id,token)
      console.log(response.data)
      if (response.data.status==false) {
        navigator('/Authorized')
          return;
      }
    })
    }
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setClickedDate(false);
      }
    }

    const getUsername=()=>{
      getUser(id).then(response=>setUsername(response.data.username))
      .catch(error=>console.log(error))
    }


    useEffect(()=>{
    checkIfAuthorized();
    document.addEventListener('mousedown', handleClickOutside);
    getTodos(id);
    getUsername();
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      };
    },[])
  

  const notifyAdd = () => toast("Task added successfully!");
  
  
  return ( 
    <div className='d-flex home' >
        <SideBar id={id} todos={todos}/>
        <div className='d-flex flex-column col-8 align-items-start'>
            <Notifications tasks={todos}/>
            <Navbar username={username}/>
            <Todos todos={todos} setShowModal={setShowModal} userId={id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            <ToastContainer />
            <div className='position-absolute top-50 start-50 translate-middle'>
                <AddTask  showModal={showModal} setShowModal={setShowModal} userId={id} addTodo={addTodo}/>
            </div>
        </div>
    </div>
    )
  }
  
  export default Home;
  