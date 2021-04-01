import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import "../Styles/Styles.css";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  return todos.map((todo, index) => (
    <div className="container">
      <div
        style={{ display: "flex" }}
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div className="items-row row w-50">
          <div className="col-10">
            <div
              key={todo.id}
              className="item-names"
              onClick={() => completeTodo(todo.id)}
            >
              <h4 className="mt-2 item-text">{todo.text}</h4>
            </div>
          </div>
          <div className="col-2">
            <div className="icons text-larger">
              <RiCloseCircleLine
                style={{ color: "white" }}
                onClick={() => removeTodo(todo.id)}
                className="delete-icon h4 mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Todo;


// Developed By Raghvendra Singh