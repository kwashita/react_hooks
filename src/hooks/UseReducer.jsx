import React, { useState, useReducer, useRef } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADDTODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};
function reducer(todos, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [
        ...todos,
        { id: Date.now(), name: action.payload.name, complete: false },
      ];
      break;
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      break;
  }
}
export default function UseReducer() {
  const inputRef = useRef();
  const [todos, dispatch] = useReducer(reducer, []);

  const handleTodos = (e) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS.ADDTODO,
      payload: { name: inputRef.current.value },
    });

    inputRef.current.value = "";
  };
  return (
    <>
      <div>UseReducer</div>
      <form onSubmit={handleTodos}>
        <input type="text" ref={inputRef} />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>;
      })}
    </>
  );
}
