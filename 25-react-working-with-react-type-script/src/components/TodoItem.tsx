import React from "react";
import classes from "./TodoItem.module.css";
const TodoList: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoList;
