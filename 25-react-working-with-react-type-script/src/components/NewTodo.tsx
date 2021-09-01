import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo:React.FC  = () => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const context = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    };
    context.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={inputTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
