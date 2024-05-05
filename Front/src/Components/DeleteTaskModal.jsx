import React from 'react'
import ModalDialog from 'react-bootstrap/Modal';

const DeleteTaskModal = ({showModal,setShowModal,deleteTodo,userId,todoId}) => {
  return (
    <ModalDialog  className="modal-dialog-centered" show={showModal} onHide={()=>setShowModal(false)}>
        <ModalDialog.Header closeButton>
          <ModalDialog.Title>Delete task</ModalDialog.Title>
        </ModalDialog.Header>
        <ModalDialog.Body>
        <div className='d-flex flex-row'>
        <p>Are you sure you want to delete this task?</p>
        </div>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <button variant="primary" onClick={()=>{deleteTodo(userId,todoId);setShowModal(false)}}>Delete</button>
          <button variant="secondary" onClick={()=>setShowModal(false)}>
            Cancel
          </button>
        </ModalDialog.Footer>
      </ModalDialog>
  )
}

export default DeleteTaskModal