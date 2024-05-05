import React,{useState} from 'react'
import ModalDialog from 'react-bootstrap/Modal';
import CalendarPicker from './CalendarPicker.jsx';


const AddTask = ({showModal,setShowModal,addTodo,userId}) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [input,setinput]=useState("");
    const [dueDate, setDueDate] = useState(null);
    const [clickedDate, setClickedDate] = useState(false)
    const [category, setCategory] = useState("")
    const Add=()=>{
      let task={
        userId:userId,
        text:input,
        dueDate: dueDate?dueDate.toISOString():"",
        done:false,
        category:category
      };
      addTodo(task)
      setinput("");
      setDueDate(null);
      handleClose();
    }
  return (
    <div>
    <ModalDialog  className="modal-dialog-centered" show={showModal} onHide={()=>{handleClose();setClickedDate(false)}}>
        <ModalDialog.Header closeButton>
          <ModalDialog.Title>Add a task</ModalDialog.Title>
        </ModalDialog.Header>
        <ModalDialog.Body className>
        <div className='d-flex flex-column'>
          <label className=''>Task title</label>
        <input
            type="text"
            placeholder='go to the gym...'
            onChange={(e) => setinput(e.target.value)}
            className="form-control"
            value={input}
          />
        </div>
        <div className='d-flex flex-column mt-2'>
        <label className=''>Category</label>
        <input
            type="text"
            placeholder='sport'
            onChange={(e)=>setCategory(e.target.value)}
            className="form-control"
            value={category}
          />
           <span className="m-2" onClick={()=>setClickedDate(!clickedDate)}>
        <i className="bi bi-calendar"></i>
        </span>
          </div>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <button variant="primary" disabled={input.length==0} onClick={Add}>Add</button>
          <button variant="secondary" onClick={handleClose}>
            Cancel
          </button>
        </ModalDialog.Footer>
        {clickedDate &&  <CalendarPicker dueDate={dueDate} setDueDate={setDueDate}/>}
      </ModalDialog>
            </div>
  )
}

export default AddTask