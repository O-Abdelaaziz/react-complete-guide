import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openModelHandler = () => {
        setShowModal(true);
    }

    const closeModelHandler = () => {
        setShowModal(false);
    }

    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={openModelHandler}>Delete</button>
            </div>

            {showModal && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} />}
            {showModal && <Backdrop onClick={closeModelHandler} />}
        </div>
    )
}

export default Todo
