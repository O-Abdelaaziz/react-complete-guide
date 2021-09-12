import React from 'react'

const Todo = (props) => {
    const deleteHandler =()=>{
        console.log("clicked!");
    }
    
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Todo
