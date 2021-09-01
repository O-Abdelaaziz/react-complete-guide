import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={inputTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
