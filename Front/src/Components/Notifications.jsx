import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Notifications = ({ tasks }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [DeadlineTasks, setDeadlineTasks] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const navigator=useNavigate();


  useEffect(() => {
    let date=new Date();
    let month = date.getMonth() + 1;
    let dateStr = date.getFullYear() + '-' + month.toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');

    let demo= tasks.filter((task) => task.dueDate &&  task.dueDate.substr(0,10) === dateStr && !task.done)
    if (demo.length > 0) {
      setShowNotification(true);
      setDeadlineTasks(demo)
    }
    else
    {
      setShowNotification(false);
      setDeadlineTasks([])
    }
    console.log("tasks changed")
  }, [tasks]); 


  return (
    <div className='mt-1'>
      <div className='position-absolute end-0 mx-4'>
      <i className="bi bi-box-arrow-left mx-4 option" style={{color:"rgb(13 110 253)",fontSize: '1.5rem'}} onClick={()=>navigator('/login')}></i>
      {showNotification ? 
        <i className="bi bi-bell-fill option" style={{ color:"rgb(13 110 253)", fontSize: '1.5rem' }} onClick={handleShow}></i> 
        : 
        <i className="bi bi-bell" style={{ color:"rgb(13 110 253)", fontSize: '1.5rem' }}></i>
      }
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tasks Due Today</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {DeadlineTasks.map(task => (
              <h4 key={task.id}>{task.text}</h4>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Notifications;