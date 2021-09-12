import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {

    const [showModal, setShowModal] = useState(false);

    const deleteHandler = () => {
        setShowModal(true);
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>

            {showModal && <Modal />}
            {showModal && <Backdrop />}
        </div>
    )
}

export default Todo
