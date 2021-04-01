import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Styles.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="">
      <div className="jumbotron">
        <h2>Todo List</h2>
      </div>
      <form onSubmit={handleSubmit} className="todo-form form w-100">
        <div className="form-group">
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="form-control todo-input "
            ref={inputRef}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="todo-button btn btn-sm btn-danger ml-3"
          style={{width:'100px', height:'40px'}}
        >
          Add todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
