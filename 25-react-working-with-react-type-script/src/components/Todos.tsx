import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos:React.FC = () => {
  const context = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {context.items.map((item) => (
        // <li key={item.id}>{item.text} </li>
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={context.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
